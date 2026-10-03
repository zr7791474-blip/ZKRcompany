"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "failed";

const projectTypes = ["Website", "Web app / product", "Brand + website", "Redesign of an existing site", "Not sure yet"];
const budgets = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1–2 months", "3+ months", "Flexible"];

const field =
  "mt-2 block min-h-12 w-full rounded-sm border border-night/60 bg-paper px-3 py-2.5 text-base text-night placeholder:text-night/60";
const labelCls = "block text-[15px] font-medium";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [mailto, setMailto] = useState("");

  function mailtoHref() {
    const d = new FormData(formRef.current ?? undefined);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [
      get("message"),
      "",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Project type: ${get("projectType")}`,
      `Budget: ${get("budget")}`,
      `Timeline: ${get("timeline")}`,
      `Current website: ${get("website")}`,
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setStatus("sending");
    setMessage("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setStatus("sent");
        setMessage("Thanks. Your message was delivered and I'll reply by email.");
        formRef.current?.reset();
        return;
      }
      if (res.status === 400 && json.fields) {
        setFieldErrors(json.fields);
        setStatus("idle");
        setMessage("Please check the highlighted fields.");
        return;
      }
      setMailto(mailtoHref());
      setStatus("failed");
      setMessage(
        json.code === "not_configured"
          ? "The contact form isn't connected to email yet, so your message was NOT sent."
          : "Something went wrong and your message was NOT sent."
      );
    } catch {
      setMailto(mailtoHref());
      setStatus("failed");
      setMessage("I couldn't reach the server, so your message was NOT sent.");
    }
  }

  const err = (k: string) => fieldErrors[k];
  const describe = (k: string) => (err(k) ? `${k}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-site">Leave this empty</label>
        <input id="cf-site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="cf-name" className={labelCls}>
          Name
        </label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required aria-required="true"
          aria-invalid={!!err("name")} aria-describedby={describe("name")} className={field} />
        {err("name") && <p id="name-error" className="mt-1 text-sm text-red">{err("name")}</p>}
      </div>

      <div>
        <label htmlFor="cf-email" className={labelCls}>
          Email
        </label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required aria-required="true"
          aria-invalid={!!err("email")} aria-describedby={describe("email")} className={field} />
        {err("email") && <p id="email-error" className="mt-1 text-sm text-red">{err("email")}</p>}
      </div>

      <div>
        <label htmlFor="cf-type" className={labelCls}>
          Project type
        </label>
        <select id="cf-type" name="projectType" defaultValue="" className={field}>
          <option value="">Select…</option>
          {projectTypes.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-budget" className={labelCls}>
          Budget range
        </label>
        <select id="cf-budget" name="budget" defaultValue="" className={field}>
          <option value="">Select…</option>
          {budgets.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-timeline" className={labelCls}>
          Timeline
        </label>
        <select id="cf-timeline" name="timeline" defaultValue="" className={field}>
          <option value="">Select…</option>
          {timelines.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-website" className={labelCls}>
          Current website <span className="font-normal text-night/70">(optional)</span>
        </label>
        <input id="cf-website" name="website" type="url" inputMode="url" autoComplete="url" placeholder="https://" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={labelCls}>
          Message
        </label>
        <textarea id="cf-message" name="message" rows={6} required aria-required="true"
          aria-invalid={!!err("message")} aria-describedby={describe("message")} className={field} />
        {err("message") && <p id="message-error" className="mt-1 text-sm text-red">{err("message")}</p>}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-red px-8 text-[15px] font-semibold text-white transition-colors hover:bg-red-dark disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {/* Always rendered so screen readers announce changes. */}
        <div role="status" aria-live="polite" className="mt-5 text-[15px]">
          {status === "sent" && <p className="border-l-2 border-night pl-4">{message}</p>}
          {status === "idle" && message && <p className="text-red">{message}</p>}
        </div>
        <div role="alert" className="text-[15px]">
          {status === "failed" && (
            <div className="mt-5 border-l-2 border-red pl-4">
              <p>{message}</p>
              <p className="mt-2">
                Please email me directly at{" "}
                <a href={`mailto:${site.email}`} className="u-link font-semibold">
                  {site.email}
                </a>
                , or{" "}
                <a href={mailto} className="u-link font-semibold">
                  open your email app with this message filled in
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
