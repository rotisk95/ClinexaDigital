import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // For Gmail/Google Workspace
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS  // App password or regular password
    }
  });
};

// Alternative configuration for Outlook/Hotmail
const createOutlookTransporter = () => {
  return nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Generic SMTP configuration
const createSMTPTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const serviceOptions: Record<string, string> = {
  'website': 'Custom Medical Website',
  'appointment': 'Appointment System',
  'forms': 'Digital Patient Forms',
  'seo': 'Local SEO for Medical Practices',
  'communication': 'Patient Communication Tools',
  'hosting': 'HIPAA-Compliant Hosting',
  'other': 'Other/Multiple Services'
};

export async function sendContactFormEmailNodemailer(formData: any): Promise<boolean> {
  try {
    // Use Outlook transporter since recipient is outlook.com
    const transporter = createOutlookTransporter();
    
    const { name, email, practice, phone, interest, message } = formData;
    
    // Create email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${name}</p>
          ${practice ? `<p><strong>Practice:</strong> ${practice}</p>` : ''}
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          <p><strong>Interested in:</strong> ${serviceOptions[interest] || interest}</p>
          ${message ? `
            <div style="margin-top: 15px;">
              <strong>Message:</strong>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          ` : ''}
        </div>
        <p style="color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
          This message was sent from the Clinexa website contact form.
        </p>
      </div>
    `;

    const textContent = `
New Contact Form Submission
==========================

From: ${name}
${practice ? `Practice: ${practice}\n` : ''}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
Interested in: ${serviceOptions[interest] || interest}
${message ? `\nMessage:\n${message}\n` : ''}

--
This message was sent from the Clinexa website contact form.
    `;

    // Define email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address
      to: 'noel.tiscareno@outlook.com', // recipient
      replyTo: email, // reply to the form submitter
      subject: `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
    
  } catch (error) {
    console.error('Error sending email with nodemailer:', error);
    return false;
  }
}