import { 
  type Newsletter, type InsertNewsletter, 
  type WorkshopRequest, type InsertWorkshopRequest, 
  type ContactForm, type InsertContactForm,
  type Testimonial, type InsertTestimonial,
  type Resource, type InsertResource,
  type CaseStudy, type InsertCaseStudy,
  type SiteSetting, type InsertSiteSetting
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Newsletter methods
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
  
  // Workshop request methods
  createWorkshopRequest(request: InsertWorkshopRequest): Promise<WorkshopRequest>;
  getWorkshopRequests(): Promise<WorkshopRequest[]>;
  
  // Contact form methods
  createContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
  
  // Testimonial methods
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
  getPublicTestimonials(): Promise<Testimonial[]>;
  updateTestimonial(id: string, data: Partial<InsertTestimonial>): Promise<Testimonial>;
  deleteTestimonial(id: string): Promise<void>;
  
  // Resource methods
  createResource(resource: InsertResource): Promise<Resource>;
  getResources(): Promise<Resource[]>;
  getPublicResources(): Promise<Resource[]>;
  updateResource(id: string, data: Partial<InsertResource>): Promise<Resource>;
  deleteResource(id: string): Promise<void>;
  
  // Case Study methods
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  getCaseStudies(): Promise<CaseStudy[]>;
  getPublishedCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | null>;
  updateCaseStudy(id: string, data: Partial<InsertCaseStudy>): Promise<CaseStudy>;
  deleteCaseStudy(id: string): Promise<void>;
  
  // Site Settings methods
  getSiteSettings(): Promise<SiteSetting[]>;
  getSiteSetting(key: string): Promise<SiteSetting | null>;
  updateSiteSetting(key: string, value: string): Promise<SiteSetting>;
}

export class MemStorage implements IStorage {
  private newsletters: Map<string, Newsletter>;
  private workshopRequests: Map<string, WorkshopRequest>;
  private contactForms: Map<string, ContactForm>;
  private testimonials: Map<string, Testimonial>;
  private resources: Map<string, Resource>;
  private caseStudies: Map<string, CaseStudy>;
  private siteSettings: Map<string, SiteSetting>;

  constructor() {
    this.newsletters = new Map();
    this.workshopRequests = new Map();
    this.contactForms = new Map();
    this.testimonials = new Map();
    this.resources = new Map();
    this.caseStudies = new Map();
    this.siteSettings = new Map();
    
    // Initialize with some default testimonials and settings
    this.initializeDefaults();
  }

  private initializeDefaults() {
    // Default testimonials
    const defaultTestimonials = [
      {
        id: randomUUID(),
        name: "Sarah Chen",
        title: "CEO",
        company: "TechFlow Solutions",
        content: "SparkG Media transformed my LinkedIn presence from invisible to iconic. In 90 days, I went from 200 followers to 15,000 and landed 3 major speaking opportunities.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&h=400&fit=crop" as string,
        rating: 5,
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Marcus Rodriguez",
        title: "Founder",
        company: "Growth Dynamics",
        content: "The team at SparkG doesn't just create content—they create legacy. My personal brand is now my biggest business asset, generating $2M+ in opportunities.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&h=400&fit=crop" as string,
        rating: 5,
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Dr. Amanda Foster",
        title: "Executive Coach",
        company: "Leadership Mastery Institute",
        content: "Working with SparkG was a game-changer. They helped me position myself as the go-to authority in executive coaching, resulting in a 300% increase in premium client inquiries.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&h=400&fit=crop" as string,
        rating: 5,
        isActive: true,
        createdAt: new Date(),
      }
    ];

    defaultTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });

    // Default site settings
    const defaultSettings = [
      { key: 'hero_cta_url', value: '/about' },
      { key: 'header_cta_url', value: '/about' }
    ];

    defaultSettings.forEach(setting => {
      const siteSettings: SiteSetting = {
        id: randomUUID(),
        key: setting.key,
        value: setting.value,
        updatedAt: new Date(),
      };
      this.siteSettings.set(setting.key, siteSettings);
    });
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createWorkshopRequest(insertRequest: InsertWorkshopRequest): Promise<WorkshopRequest> {
    const id = randomUUID();
    const request: WorkshopRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.workshopRequests.set(id, request);
    return request;
  }

  async getWorkshopRequests(): Promise<WorkshopRequest[]> {
    return Array.from(this.workshopRequests.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createContactForm(insertForm: InsertContactForm): Promise<ContactForm> {
    const id = randomUUID();
    const form: ContactForm = { 
      ...insertForm, 
      id, 
      createdAt: new Date() 
    };
    this.contactForms.set(id, form);
    return form;
  }

  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // Testimonial methods
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      image: insertTestimonial.image || null,
      rating: insertTestimonial.rating || 5,
      isActive: insertTestimonial.isActive ?? true,
      createdAt: new Date() 
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getPublicTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(t => t.isActive)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async updateTestimonial(id: string, data: Partial<InsertTestimonial>): Promise<Testimonial> {
    const existing = this.testimonials.get(id);
    if (!existing) throw new Error('Testimonial not found');
    
    const updated = { ...existing, ...data };
    this.testimonials.set(id, updated);
    return updated;
  }

  async deleteTestimonial(id: string): Promise<void> {
    this.testimonials.delete(id);
  }

  // Resource methods
  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = randomUUID();
    const resource: Resource = { 
      ...insertResource, 
      id, 
      fileUrl: insertResource.fileUrl || null,
      downloadUrl: insertResource.downloadUrl || null,
      fileType: insertResource.fileType || null,
      fileSize: insertResource.fileSize || null,
      isActive: insertResource.isActive ?? true,
      isDirectUpload: insertResource.isDirectUpload ?? true,
      createdAt: new Date() 
    };
    this.resources.set(id, resource);
    return resource;
  }

  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getPublicResources(): Promise<Resource[]> {
    return Array.from(this.resources.values())
      .filter(r => r.isActive)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async updateResource(id: string, data: Partial<InsertResource>): Promise<Resource> {
    const existing = this.resources.get(id);
    if (!existing) throw new Error('Resource not found');
    
    const updated = { ...existing, ...data };
    this.resources.set(id, updated);
    return updated;
  }

  async deleteResource(id: string): Promise<void> {
    this.resources.delete(id);
  }

  // Case Study methods
  async createCaseStudy(insertCaseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const id = randomUUID();
    const caseStudy: CaseStudy = { 
      ...insertCaseStudy, 
      id, 
      featuredImage: insertCaseStudy.featuredImage || null,
      results: insertCaseStudy.results || null,
      isPublished: insertCaseStudy.isPublished ?? false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.caseStudies.set(id, caseStudy);
    return caseStudy;
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getPublishedCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values())
      .filter(cs => cs.isPublished)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const caseStudy = Array.from(this.caseStudies.values()).find(cs => cs.slug === slug);
    return caseStudy || null;
  }

  async updateCaseStudy(id: string, data: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const existing = this.caseStudies.get(id);
    if (!existing) throw new Error('Case study not found');
    
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.caseStudies.set(id, updated);
    return updated;
  }

  async deleteCaseStudy(id: string): Promise<void> {
    this.caseStudies.delete(id);
  }

  // Site Settings methods
  async getSiteSettings(): Promise<SiteSetting[]> {
    return Array.from(this.siteSettings.values());
  }

  async getSiteSetting(key: string): Promise<SiteSetting | null> {
    return this.siteSettings.get(key) || null;
  }

  async updateSiteSetting(key: string, value: string): Promise<SiteSetting> {
    const existing = this.siteSettings.get(key);
    if (existing) {
      const updated = { ...existing, value, updatedAt: new Date() };
      this.siteSettings.set(key, updated);
      return updated;
    } else {
      const newSetting: SiteSetting = {
        id: randomUUID(),
        key,
        value,
        updatedAt: new Date(),
      };
      this.siteSettings.set(key, newSetting);
      return newSetting;
    }
  }
}

export const storage = new MemStorage();
