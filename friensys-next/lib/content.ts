import productsJson from "@/content/products.json";
import schoolsJson from "@/content/schools.json";
import testimonialsJson from "@/content/testimonials.json";
import statsJson from "@/content/stats.json";
import aiFeaturesJson from "@/content/ai-features.json";
import modulesJson from "@/content/modules.json";
import caseStudiesJson from "@/content/case-studies.json";
import navJson from "@/content/nav.json";
import faqsJson from "@/content/faqs.json";
import { z } from "zod";

const productSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  summary: z.string(),
  hero: z.string(),
  icon: z.string(),
  features: z.array(z.string()),
  primaryCta: z.object({ label: z.string(), href: z.string() }),
});

const schoolSchema = z.object({
  name: z.string(),
  city: z.string(),
  board: z.string(),
  logo: z.string(),
});

const testimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  city: z.string(),
  schoolLogo: z.string(),
  rating: z.number().min(1).max(5),
});

const statSchema = z.object({
  value: z.number(),
  label: z.string(),
  format: z.enum(["plus", "exact", "percent"]),
});

const aiFeatureSchema = z.object({
  title: z.string(),
  summary: z.string(),
  quarter: z.string(),
  icon: z.string(),
});

const moduleGroupSchema = z.object({
  name: z.string(),
  modules: z.array(z.string()),
});

const caseStudySchema = z.object({
  slug: z.string(),
  school: z.string(),
  city: z.string(),
  title: z.string(),
  summary: z.string(),
  stats: z.array(z.object({ label: z.string(), value: z.string() })),
  logo: z.string(),
});

const faqSchema = z.object({ q: z.string(), a: z.string() });

const products = z.object({ products: z.array(productSchema) }).parse(productsJson).products;
const schools = z.object({ schools: z.array(schoolSchema) }).parse(schoolsJson).schools;
const testimonials = z
  .object({ testimonials: z.array(testimonialSchema) })
  .parse(testimonialsJson).testimonials;
const stats = z.record(z.string(), statSchema).parse(statsJson);
const aiFeatures = z
  .object({
    live: z.array(aiFeatureSchema),
    roadmap: z.array(aiFeatureSchema),
    manifesto: z.object({ headline: z.string(), body: z.string() }),
  })
  .parse(aiFeaturesJson);
const modules = z.object({ groups: z.array(moduleGroupSchema) }).parse(modulesJson).groups;
const caseStudies = z
  .object({ studies: z.array(caseStudySchema) })
  .parse(caseStudiesJson).studies;
const faqs = z.record(z.string(), z.array(faqSchema)).parse(faqsJson);

export function getProducts() {
  return products;
}
export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
export function getSchools() {
  return schools;
}
export function getTestimonials() {
  return testimonials;
}
export function getStats() {
  return stats;
}
export function getAiFeatures() {
  return aiFeatures;
}
export function getModules() {
  return modules;
}
export function getCaseStudies() {
  return caseStudies;
}
export function getCaseStudy(slug: string) {
  return caseStudies.find((s) => s.slug === slug);
}
export function getNav() {
  return navJson as typeof navJson;
}
export function getFaqs(key: string) {
  return faqs[key] ?? [];
}

export type Product = (typeof products)[number];
export type School = (typeof schools)[number];
export type Testimonial = (typeof testimonials)[number];
export type CaseStudy = (typeof caseStudies)[number];
