import { NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export async function GET(request) {
  // 1. Verify cron job secret to prevent unauthorized access
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 2. Initialize Firebase Admin
    if (!getApps().length) {
      // Initialize Firebase Admin securely using a Service Account
      const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT 
        ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
        : undefined;

      initializeApp({
        credential: serviceAccount ? cert(serviceAccount) : undefined,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      });
    }
    const db = getFirestore();

    // 3. Fetch all pre-orders
    const preordersSnapshot = await db.collection('preorders').get();
    
    if (preordersSnapshot.empty) {
      return NextResponse.json({ message: 'No pre-orders found' }, { status: 200 });
    }

    const emails = [];
    preordersSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.email) emails.push(data.email);
    });

    // 4. Send email via Resend API
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Sk Niyaz Noor <no-reply@niyazunveiled.com>',
      to: ['no-reply@niyazunveiled.com'],
      bcc: emails,
      subject: "The wait is over! my novel - Coffee is out now! 🎉",
      html: "<html><body><h1>It's Launch Day!</h1><p>Thank you so much for pre-ordering. You can now grab your copy of <strong>my novel - Coffee</strong>!</p></body></html>"
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
    }

    return NextResponse.json({ message: `Successfully sent launch emails to ${emails.length} subscribers!`, data }, { status: 200 });

  } catch (error) {
    console.error('Error triggering launch email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
