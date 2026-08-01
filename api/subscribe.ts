import nodemailer from 'nodemailer';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Create transporter with Zoho SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'charter@sarvenejets.com',
      pass: 'AmTs8tqgXmwT',
    },
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });

  try {
    const emailContent = `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">This subscriber has opted in to receive Sarvene Jets newsletter updates.</p>
    `;

    await transporter.sendMail({
      from: '"Sarvene Jets" <charter@sarvenejets.com>',
      to: 'charter@sarvenejets.com',
      replyTo: email || 'charter@sarvenejets.com',
      subject: 'New Newsletter Subscription',
      html: emailContent,
    });

    return res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Failed to subscribe' });
  }
}
