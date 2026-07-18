import { NextRequest, NextResponse } from "next/server";

// NOTE: This route validates the submission and returns success so the
// front end works end-to-end out of the box. It does not yet send an
// email or write to a database. Wire it up to your mailer / DB of choice
// (e.g. Resend, Postmark, or the existing PHP backend's contact.php via
// a server-to-server fetch) before relying on it in production.

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, company } = body ?? {};

    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Tell us a little more about your project (10+ characters)." },
        { status: 400 }
      );
    }

    // Server-side log for now — replace with real delivery.
    console.log("New contact submission:", {
      name,
      email,
      company: company ?? null,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
