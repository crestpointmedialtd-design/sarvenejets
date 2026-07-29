import nodemailer from 'nodemailer';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, passengers, route, date, message, form_name } = req.body;

  // Create transporter with Zoho SMTP
  const transporter = nodemailer.createTransporter({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'charter@sarvenejets.com',
      pass: 'AmTs8tqgXmwT',
    },
  });

  try {
    // Build email content
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

    // Send email
    await transporter.sendMail({
      from: 'charter@sarvenejets.com',
      to: 'charter@sarvenejets.com',
      subject: subject,
      html: emailContent,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
