import { NextRequest, NextResponse } from 'next/server';

const FROM_EMAIL = 'noreply@lifecaresystems.com.my';
const DEFAULT_TO_EMAIL = 'enquiries@genesiscare.com.my';

export async function POST(request: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  let body: { subject?: string; html?: string; to?: string | string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { subject, html, to } = body;
  if (!subject || !html) {
    return NextResponse.json({ error: 'Missing subject or html' }, { status: 400 });
  }

  // Use provided recipient(s) or fall back to the default admin inbox
  const recipients: string[] = to
    ? Array.isArray(to) ? to : [to]
    : [DEFAULT_TO_EMAIL];

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Genesis Life Care <${FROM_EMAIL}>`,
        to: recipients,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend API error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
