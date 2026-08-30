import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Sk Niyaz Noor <no-reply@niyazunveiled.com>',
      to: [email],
      subject: "Thanks for pre-ordering my novel - Coffee! ✨",
      html: `
        <html>
          <body style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h1 style="color: #6a1b2d;">You're on the list, ${name || 'friend'}!</h1>
            <p>Thank you so much for pre-ordering <strong>my novel - Coffee</strong>.</p>
            <p>This email confirms that you will be the first to know the moment the novel launches on September 23rd, 2026.</p>
            <p>Stay tuned for more updates, and thank you for supporting my writing journey.</p>
            <br/>
            <p>Warmly,<br/>Sk Niyaz Noor</p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Confirmation email sent successfully!', data }, { status: 200 });

  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
