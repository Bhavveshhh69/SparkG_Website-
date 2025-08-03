import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const workshopRequests = pgTable("workshop_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const contactForms = pgTable("contact_forms", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  image: text("image"),
  rating: integer("rating").default(5),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const resources = pgTable("resources", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  fileUrl: text("file_url"),
  downloadUrl: text("download_url"),
  fileType: text("file_type"),
  fileSize: integer("file_size"),
  isActive: boolean("is_active").default(true),
  isDirectUpload: boolean("is_direct_upload").default(true),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  clientName: text("client_name").notNull(),
  industry: text("industry").notNull(),
  summary: text("summary").notNull(),
  content: jsonb("content").notNull(),
  featuredImage: text("featured_image"),
  results: jsonb("results"),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`now()`).notNull(),
});

export const siteSettings = pgTable("site_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  key: text("key").notNull(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").default(sql`now()`).notNull(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  name: true,
  email: true,
});

export const insertWorkshopRequestSchema = createInsertSchema(workshopRequests).pick({
  companyName: true,
  email: true,
  message: true,
});

export const insertContactFormSchema = createInsertSchema(contactForms).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  name: true,
  title: true,
  company: true,
  content: true,
  image: true,
  rating: true,
  isActive: true,
});

export const insertResourceSchema = createInsertSchema(resources).pick({
  title: true,
  description: true,
  fileUrl: true,
  downloadUrl: true,
  fileType: true,
  fileSize: true,
  isActive: true,
  isDirectUpload: true,
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).pick({
  title: true,
  slug: true,
  clientName: true,
  industry: true,
  summary: true,
  content: true,
  featuredImage: true,
  results: true,
  isPublished: true,
});

export const insertSiteSettingSchema = createInsertSchema(siteSettings).pick({
  key: true,
  value: true,
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

export type InsertWorkshopRequest = z.infer<typeof insertWorkshopRequestSchema>;
export type WorkshopRequest = typeof workshopRequests.$inferSelect;

export type InsertContactForm = z.infer<typeof insertContactFormSchema>;
export type ContactForm = typeof contactForms.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;

export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;

export type InsertSiteSetting = z.infer<typeof insertSiteSettingSchema>;
export type SiteSetting = typeof siteSettings.$inferSelect;
