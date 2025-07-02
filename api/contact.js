import { MailService } from "@sendgrid/mail";

const mailService = new MailService();

// CHANGE: Enhanced error handling and logging for environment variables
if (!process.env.SENDGRID_API_KEY) {
  console.error("CRITICAL: SENDGRID_API_KEY environment variable is not set");
} else {
  console.log(
    "INFO: SendGrid API key detected, length:",
    process.env.SENDGRID_API_KEY.length,
  );
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req, res) {
  console.log("INFO: Contact form request received:", {
    method: req.method,
    headers: req.headers,
    timestamp: new Date().toISOString(),
  });

  // Enable CORS with explicit origin handling
  const allowedOrigins = [
    "https://clinexa-digital.vercel.app",
    "https://www.clinexadigital.com",
    "https://clinexadigital.com",
    "http://localhost:3001",
    "http://localhost:5000",
    "http://localhost:3000",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  if (req.method === "OPTIONS") {
    console.log("INFO: CORS preflight request handled");
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    console.warn("WARNING: Non-POST method attempted:", {
      method: req.method,
      url: req.url,
      headers: req.headers,
      timestamp: new Date().toISOString(),
    });
    res.status(405).json({
      success: false,
      message: "Method not allowed",
      allowedMethods: ["POST"],
      receivedMethod: req.method,
    });
    return;
  }

  // CHANGE: Validate SendGrid configuration before processing
  if (!process.env.SENDGRID_API_KEY) {
    console.error("ERROR: SendGrid API key not configured");
    res.status(500).json({
      success: false,
      message: "Email service configuration error",
    });
    return;
  }

  try {
    console.log("INFO: Processing form data:", {
      hasName: !!req.body.name,
      hasEmail: !!req.body.email,
      hasInterest: !!req.body.interest,
      hasPrivacyAgreed: !!req.body.privacyAgreed,
    });

    const { name, practice, email, phone, interest, message, privacyAgreed } =
      req.body;

    // Basic validation with detailed logging
    if (!name || !email || !interest || !privacyAgreed) {
      console.warn("WARNING: Form validation failed:", {
        missingName: !name,
        missingEmail: !email,
        missingInterest: !interest,
        privacyNotAgreed: !privacyAgreed,
      });

      res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
      return;
    }

    // Service options mapping
    const serviceOptions = {
      website: "Custom Medical Website",
      appointment: "Appointment System",
      forms: "Digital Patient Forms",
      seo: "Local SEO for Medical Practices",
      communication: "Patient Communication Tools",
      hosting: "HIPAA-Compliant Hosting",
      other: "Other/Multiple Services",
    };

    // Create email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      ${practice ? `<p><strong>Practice:</strong> ${practice}</p>` : ""}
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Interested in:</strong> ${serviceOptions[interest] || interest}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      <p><em>This message was sent from the Clinexa website contact form at ${new Date().toLocaleString()}.</em></p>
    `;

    const textContent = `
      New Contact Form Submission
      ---------------------------
      From: ${name}
      ${practice ? `Practice: ${practice}\n` : ""}
      Email: ${email}
      ${phone ? `Phone: ${phone}\n` : ""}
      Interested in: ${serviceOptions[interest] || interest}
      ${message ? `Message: ${message}\n` : ""}

      This message was sent from the Clinexa website contact form at ${new Date().toLocaleString()}.
    `;

    // CHANGE: Enhanced email configuration with error handling
    const msg = {
      to: "noel.tiscareno@outlook.com",
      from: "noel.tiscareno@outlook.com",
      subject: `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    };

    console.log("INFO: Attempting to send email via SendGrid");

    // CHANGE: Detailed SendGrid error handling
    try {
      await mailService.send(msg);
      console.log("SUCCESS: Email sent successfully via SendGrid");

      res.status(200).json({
        success: true,
        message: "Thank you for your message. We'll get back to you soon.",
      });
    } catch (sendGridError) {
      // CHANGE: Enhanced SendGrid error logging with detailed response information
      console.error("ERROR: SendGrid email sending failed:", {
        error: sendGridError.message,
        code: sendGridError.code,
        statusCode: sendGridError.response?.status,
        responseBody: sendGridError.response?.body,
        responseErrors: sendGridError.response?.body?.errors,
        headers: sendGridError.response?.headers,
      });

      // CHANGE: Extract specific error details from SendGrid response
      let errorDetails = "Unknown error";
      if (
        sendGridError.response?.body?.errors &&
        Array.isArray(sendGridError.response.body.errors)
      ) {
        errorDetails = sendGridError.response.body.errors
          .map((err) => err.message || err.field || err)
          .join(", ");
        console.error(
          "DETAILED SendGrid errors:",
          sendGridError.response.body.errors,
        );
      }

      // CHANGE: Specific handling for 401 Unauthorized errors
      if (sendGridError.code === 401) {
        console.error(
          "CRITICAL: SendGrid API key authentication failed - check API key validity and permissions",
        );
        res.status(500).json({
          success: false,
          message:
            "Email service authentication failed. Please contact support.",
          debug:
            process.env.NODE_ENV === "development"
              ? `SendGrid 401: ${errorDetails}`
              : undefined,
        });
      } else {
        res.status(500).json({
          success: false,
          message:
            "Email delivery failed. Please try again or contact us directly.",
          debug:
            process.env.NODE_ENV === "development"
              ? `SendGrid ${sendGridError.code}: ${errorDetails}`
              : undefined,
        });
      }
    }
  } catch (error) {
    console.error("ERROR: Unexpected error in contact form handler:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
