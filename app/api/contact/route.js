import { NextResponse } from "next/server"; 
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  const msg = {
    to: "ayoolabolaji12@yahoo.com",
    from: "bolajimargaret91@gmail.com",
    subject: `New message from ${name}`,
    text: message,
    html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
    replyTo: email,
  };

   try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed to send" },
      { status: 500 }
    );
  }
}
