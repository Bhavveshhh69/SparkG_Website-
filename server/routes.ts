import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertNewsletterSchema, 
  insertWorkshopRequestSchema, 
  insertContactFormSchema,
  insertTestimonialSchema,
  insertResourceSchema,
  insertCaseStudySchema,
  insertSiteSettingSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(validatedData);
      res.json({ success: true, data: newsletter });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Workshop request
  app.post("/api/workshop-request", async (req, res) => {
    try {
      const validatedData = insertWorkshopRequestSchema.parse(req.body);
      const request = await storage.createWorkshopRequest(validatedData);
      res.json({ success: true, data: request });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactFormSchema.parse(req.body);
      const form = await storage.createContactForm(validatedData);
      res.json({ success: true, data: form });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Admin routes
  app.get("/api/admin/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getNewsletters();
      res.json(newsletters);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/workshop-requests", async (req, res) => {
    try {
      const requests = await storage.getWorkshopRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/contact-forms", async (req, res) => {
    try {
      const forms = await storage.getContactForms();
      res.json(forms);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Public Testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getPublicTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin Testimonials
  app.get("/api/admin/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.json({ success: true, data: testimonial });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        console.error("Error creating testimonial:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/testimonials/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertTestimonialSchema.partial().parse(req.body);
      const testimonial = await storage.updateTestimonial(id, validatedData);
      res.json({ success: true, data: testimonial });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else if (error instanceof Error && error.message === 'Testimonial not found') {
        res.status(404).json({ message: "Testimonial not found" });
      } else {
        console.error("Error updating testimonial:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.delete("/api/admin/testimonials/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteTestimonial(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin Resources
  app.get("/api/admin/resources", async (req, res) => {
    try {
      const resources = await storage.getResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/resources", async (req, res) => {
    try {
      const validatedData = insertResourceSchema.parse(req.body);
      const resource = await storage.createResource(validatedData);
      res.json({ success: true, data: resource });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/resources/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertResourceSchema.partial().parse(req.body);
      const resource = await storage.updateResource(id, validatedData);
      res.json({ success: true, data: resource });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else if (error instanceof Error && error.message === 'Resource not found') {
        res.status(404).json({ message: "Resource not found" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.delete("/api/admin/resources/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteResource(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin Case Studies
  app.get("/api/admin/case-studies", async (req, res) => {
    try {
      const caseStudies = await storage.getCaseStudies();
      res.json(caseStudies);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/case-studies", async (req, res) => {
    try {
      const validatedData = insertCaseStudySchema.parse(req.body);
      const caseStudy = await storage.createCaseStudy(validatedData);
      res.json({ success: true, data: caseStudy });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/case-studies/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertCaseStudySchema.partial().parse(req.body);
      const caseStudy = await storage.updateCaseStudy(id, validatedData);
      res.json({ success: true, data: caseStudy });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else if (error instanceof Error && error.message === 'Case study not found') {
        res.status(404).json({ message: "Case study not found" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.delete("/api/admin/case-studies/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteCaseStudy(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Site Settings
  app.get("/api/admin/site-settings", async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      res.json(settings);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/site-settings", async (req, res) => {
    try {
      const { key, value } = insertSiteSettingSchema.parse(req.body);
      const setting = await storage.updateSiteSetting(key, value);
      res.json({ success: true, data: setting });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
