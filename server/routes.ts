import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Contact form submission schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // TODO: Integrate with EmailJS or email service
      // For now, just log the contact form submission
      console.log("Contact form submission:", validatedData);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // TODO: Serve actual resume file
    res.status(200).json({ 
      message: "Resume download endpoint",
      downloadUrl: "/resume.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
