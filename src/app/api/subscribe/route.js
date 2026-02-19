import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;
  const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

  // If MailerLite is not configured, still return success
  // so the form works during development
  if (!API_KEY) {
    console.log(`[Dev] Email signup: ${email} (MailerLite not configured)`);
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email,
        ...(GROUP_ID ? { groups: [GROUP_ID] } : {}),
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("MailerLite error:", data);
      return NextResponse.json(
        { error: "Subscription failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MailerLite error:", err);
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 500 }
    );
  }
}
