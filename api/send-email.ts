import nodemailer from 'nodemailer';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, passengers, route, date, message, form_name } = req.body;

  // Create transporter with explicit connection timeouts
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'charter@sarvenejets.com',
      pass: 'AmTs8tqgXmwT',
    },
    connectionTimeout: 10000, // 10s timeout
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });

  try {
    let emailContent = '';
    let subject = '';

    if (form_name === 'beyond-access') {
      subject = 'Sarvene Beyond Access Request';
      emailContent = `
        <h2>Sarvene Beyond Access Request</h2>
        <p><strong>Email:</strong> ${email}</p>
      `;
    } else {
      subject = `Charter Enquiry from ${name || 'Unknown'} — Sarvene Jets`;
      emailContent = `
        <h2>Charter Enquiry</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone/WhatsApp:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Passengers:</strong> ${passengers || 'Not provided'}</p>
        <p><strong>Route:</strong> ${route || 'Not provided'}</p>
        <p><strong>Departure Date:</strong> ${date || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `;
    }

    await transporter.sendMail({
      from: '"Sarvene Jets" <charter@sarvenejets.com>',
      to: 'charter@sarvenejets.com',
      replyTo: email || 'charter@sarvenejets.com',
      subject: subject,
      html: emailContent,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Failed to send email' });
  }
}