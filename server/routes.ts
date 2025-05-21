import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

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
      
      // In a real application, we would save this to a database
      // and potentially send an email notification
      
      // For now, just return a success response
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon." 
      });
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
