import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }

  console.log('New subscriber:', email);

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

    await transporter.sendMail({
      from: `"Portfolio Newsletter" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: 'New Newsletter Subscriber',
      html: `
        <h3>New Newsletter Subscriber</h3>
        <p>A new user has subscribed to your newsletter:</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log('Subscription notification sent');

    // Save to Google Sheets
    const privateKey = (process.env.private_key || '')
      .replace(/\\n/g, '\n')
      .replace(/\n/g, '\n');
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    console.log('Saved to Google Sheets');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscription email error:', error);
    return res.status(500).json({ success: false, error: 'Failed to process subscription' });
  }
}
