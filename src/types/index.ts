// GenMatrixo V2 — TypeScript Types
// Shared across all components and pages

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  techStack: string[];
  badge: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  architecture: string;
  metrics: Metric[];
  visual: "terminal" | "network" | "dashboard";
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Principle {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechStack {
  icon: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  locations: string[];
}
