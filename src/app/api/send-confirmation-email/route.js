import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send confirmation email via Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: "Sk Niyaz Noor",
          email: "no-reply@niyazunveiled.com"
        },
        to: [{ email, name }],
        subject: "Thanks for pre-ordering my novel - Coffee! ✨",
        htmlContent: `
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
        `
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo error:', errorText);
      return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Confirmation email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
