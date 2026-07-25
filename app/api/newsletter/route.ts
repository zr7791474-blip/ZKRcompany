import { NextRequest, NextResponse } from "next/server";

// NOTE: Same pattern as app/api/contact/route.ts — this validates the
// submission and returns success so the form works end-to-end, but it
// only logs server-side for now. It does not yet add the email to an
// actual mailing list. Wire it up to your ESP of choice (Mailchimp,
// Resend Audiences, ConvertKit, Beehiiv, etc.) before relying on it.

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body ?? {};

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    // Server-side log for now — replace with a real ESP call.
    console.log("New newsletter subscriber:", {
      email,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
