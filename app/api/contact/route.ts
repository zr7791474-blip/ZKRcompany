import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/content";

/**
 * Contact delivery via Resend (https://resend.com). It only reports success when
 * Resend actually accepted the email. If RESEND_API_KEY is not set, it returns
 * 503 { code: "not_configured" } and the UI tells the visitor the message was NOT sent.
 *
 * Env vars (see .env.example):
 *   RESEND_API_KEY  required
 *   CONTACT_TO      optional, default: site.email
 *   CONTACT_FROM    optional, default: "ZKR Contact <onboarding@resend.dev>"
 */

const hits = new Map<string, number[]>(); // best-effort, per server instance
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this. Respond neutrally and drop it.
  if (clip(body.site, 200)) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    return NextResponse.json({ ok: false, error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const d = {
    name: clip(body.name, 120),
    email: clip(body.email, 200),
    projectType: clip(body.projectType, 100),
    budget: clip(body.budget, 100),
    timeline: clip(body.timeline, 100),
    website: clip(body.website, 300),
    message: clip(body.message, 5000),
  };

  const fields: Record<string, string> = {};
  if (d.name.length < 2) fields.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) fields.email = "Please enter a valid email address.";
  if (d.message.length < 10) fields.message = "Please tell me a little more (at least 10 characters).";
  if (Object.keys(fields).length) return NextResponse.json({ ok: false, fields }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });

  const text = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Project type: ${d.projectType || "-"}`,
    `Budget: ${d.budget || "-"}`,
    `Timeline: ${d.timeline || "-"}`,
    `Current website: ${d.website || "-"}`,
    "",
    d.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "ZKR Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? site.email],
        reply_to: d.email,
        subject: `New project enquiry from ${d.name}`,
        text,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 });
  } catch {
    return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 });
  }

  hits.set(ip, [...recent, now]);
  return NextResponse.json({ ok: true });
}
