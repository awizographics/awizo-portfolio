import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env.local') });

console.log('ENV loaded:', {
  EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
  EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'NOT SET',
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form:', req.body);
  
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || 'New Contact Message',
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || 'N/A'}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    console.log('Email sent successfully');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error.message);
    console.error('Full error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
  }
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }

  console.log('New subscriber:', email);
  return res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
