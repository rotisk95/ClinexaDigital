import { MailService } from '@sendgrid/mail';

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const { name, practice, email, phone, interest, message, privacyAgreed } = req.body;

    // Basic validation
    if (!name || !email || !interest || !privacyAgreed) {
      res.status(400).json({ 
        success: false, 
        message: 'Required fields missing' 
      });
      return;
    }

    // Service options mapping
    const serviceOptions = {
      'website': 'Custom Medical Website',
      'appointment': 'Appointment System',
      'forms': 'Digital Patient Forms',
      'seo': 'Local SEO for Medical Practices',
      'communication': 'Patient Communication Tools',
      'hosting': 'HIPAA-Compliant Hosting',
      'other': 'Other/Multiple Services'
    };

    // Create email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      ${practice ? `<p><strong>Practice:</strong> ${practice}</p>` : ''}
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Interested in:</strong> ${serviceOptions[interest] || interest}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      <p><em>This message was sent from the Clinexa website contact form.</em></p>
    `;

    const textContent = `
      New Contact Form Submission
      ---------------------------
      From: ${name}
      ${practice ? `Practice: ${practice}\n` : ''}
      Email: ${email}
      ${phone ? `Phone: ${phone}\n` : ''}
      Interested in: ${serviceOptions[interest] || interest}
      ${message ? `Message: ${message}\n` : ''}
      
      This message was sent from the Clinexa website contact form.
    `;

    // Send email via SendGrid
    const msg = {
      to: 'noel.tiscareno@outlook.com',
      from: 'noel.tiscareno@outlook.com',
      subject: `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent,
      replyTo: email
    };

    await mailService.send(msg);

    res.status(200).json({ 
      success: true, 
      message: "Thank you for your message. We'll get back to you soon." 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: "An unexpected error occurred. Please try again later." 
    });
  }
}