import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if(!name || !email|| !message){
        return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

await resend.emails.send({
  from: "Festus Jnr Portfolio <onboarding@resend.dev>",
  to: "chidubemoffiaukwu2@gmail.com",
  replyTo: email,
  subject: `New message from ${name}`,

  html: `
    <div style="margin: 0; padding: 40px 20px; background-color: #f4f4f5; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto;">

        <!-- Header -->
        <div style="margin-bottom: 20px;">
          <p style="margin: 0 0 6px; color: #71717a; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
            Portfolio Contact
          </p>

          <h1 style="margin: 0; color: #18181b; font-size: 28px; font-weight: 600;">
            New message
          </h1>
        </div>

        <!-- Card -->
        <div style="background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; padding: 28px;">

          <!-- Sender -->
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
              From:
            </p>

            <p style="margin: 0; color: #18181b; font-size: 16px; font-weight: 600;">
              ${name}
            </p>

            <p style="margin: 4px 0 0; color: #52525b; font-size: 14px;">
              ${email}
            </p>
          </div>

          <!-- Message -->
          <div>
            <p style="margin: 0 0 10px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
              Message:
            </p>

            <div style="padding: 18px; background-color: #f4f4f5; border-radius: 12px;">
              <p style="margin: 0; color: #27272a; font-size: 15px; line-height: 1.7; ">
                ${message}
              </p>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <p style="margin: 20px 0 0; color: #a1a1aa; font-size: 12px; text-align: center;">
          Sent from Festus Jnr's portfolio
        </p>

      </div>
    </div>
  `,

  // Plain-text fallback
  text: `
New message from ${name}

Email: ${email}

Message:
${message}

Sent from Festus Jnr's portfolio.
  `,
});

    return NextResponse.json(
      {
        name,
        email,
        message: "Email sent successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
        { error: "failed to send message" },
      { status: 500 },
    );
  }
}
