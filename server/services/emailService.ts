import { MailService } from '@sendgrid/mail';

// Initialize SendGrid with API key
const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

// Email template for contact form submissions
const createContactEmailContent = (formData: any) => {
  const { name, email, practice, phone, interest, message } = formData;
  
  const serviceOptions: Record<string, string> = {
    'website': 'Custom Medical Website',
    'appointment': 'Appointment System',
    'forms': 'Digital Patient Forms',
    'seo': 'Local SEO for Medical Practices',
    'communication': 'Patient Communication Tools',
    'hosting': 'HIPAA-Compliant Hosting',
    'other': 'Other/Multiple Services'
  };

  // Create HTML content for email
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

  // Create plain text content as fallback
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

  return {
    html: htmlContent,
    text: textContent
  };
};

/**
 * Sends an email notification for a new contact form submission
 * 
 * @param formData The contact form data submitted by the user
 * @returns Promise resolving to success status
 */
export async function sendContactFormEmail(formData: any): Promise<boolean> {
  try {
    // Create email content
    const { html, text } = createContactEmailContent(formData);
    
    // Define email message parameters
    const msg = {
      to: 'noel.tiscareno@outlook.com', // Recipient email address
      from: 'noel.tiscareno@outlook.com', // Sender email address (must be verified in SendGrid)
      subject: `New Contact Form Submission from ${formData.name}`,
      text,
      html,
      replyTo: formData.email
    };

    // Send the email
    await mailService.send(msg);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error: any) {
    console.error('Error sending contact form email:', error);
    if (error.response && error.response.body) {
      console.error('SendGrid error details:', JSON.stringify(error.response.body, null, 2));
    }
    return false;
  }
}