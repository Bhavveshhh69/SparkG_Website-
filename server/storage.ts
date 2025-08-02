import { type Newsletter, type InsertNewsletter, type WorkshopRequest, type InsertWorkshopRequest, type ContactForm, type InsertContactForm } from "@shared/schema";
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
}

export class MemStorage implements IStorage {
  private newsletters: Map<string, Newsletter>;
  private workshopRequests: Map<string, WorkshopRequest>;
  private contactForms: Map<string, ContactForm>;

  constructor() {
    this.newsletters = new Map();
    this.workshopRequests = new Map();
    this.contactForms = new Map();
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
}

export const storage = new MemStorage();
