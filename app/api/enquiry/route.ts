import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const classInterest = String(body.classInterest ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (name.length < 2 || phone.length < 7 || message.length < 10) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.SCHOOL_ENQUIRY_EMAIL;
    const sender = process.env.ENQUIRY_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      return NextResponse.json(
        { error: "The enquiry form is not configured yet. Please contact the school by phone." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email || undefined,
        subject: `Website enquiry from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nClass of interest: ${classInterest || "Not provided"}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "We could not send your enquiry right now. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}