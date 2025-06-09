import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactFormEmailNodemailer } from "./services/nodemailerService";

const contactFormSchema = z.object({
  name: z.string().min(2),
  practice: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string(),
  message: z.string().optional(),
  privacyAgreed: z.boolean().refine(val => val === true)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send email notification
      const emailSent = await sendContactFormEmailNodemailer(validatedData);
      
      if (emailSent) {
        // Email sent successfully
        res.status(200).json({ 
          success: true, 
          message: "Thank you for your message. We'll get back to you soon." 
        });
      } else {
        // Email failed to send but data was valid
        console.warn("Contact form submission valid but email notification failed");
        res.status(200).json({ 
          success: true, 
          message: "Your message was received, but there may be a delay in our response." 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
