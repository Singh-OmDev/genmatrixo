"use client";

import { useState } from "react";
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Cpu, 
  Palette, 
  LineChart, 
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// Define structured content for the 7 core services
const servicesData = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: Code2,
    category: "FRONTEND & BACKEND ARCHITECTURE",
    tagline: "High-performance web applications and portal runtimes engineered for speed, SEO, and security.",
    overview: "We build bespoke web platforms, client portals, and public applications using Next.js, React, and robust backend runtimes. We focus on sub-second load times, search engine optimization (SEO), and clean code hygiene. We write clean, type-safe TypeScript, implement advanced static/server layouts, and ensure your site is built to handle millions of visitors.",
    benefits: [
      {
        title: "Blazing Fast Performance",
        desc: "Optimized server-side rendering (SSR) and asset compression guarantee sub-second page loads."
      },
      {
        title: "Strict Type-Safety",
        desc: "A clean TypeScript-strict codebase prevents run-time errors and simplifies long-term updates."
      },
      {
        title: "SEO-First Structure",
        desc: "Injected JSON-LD schemas and perfect Core Web Vitals help maximize your rank on Google."
      }
    ],
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "GraphQL", "PostgreSQL", "Vercel"],
    process: [
      { step: "01", title: "Specifications", desc: "Aligning user paths, data flow, and page layout architectures." },
      { step: "02", title: "High-Fi Design", desc: "Designing responsive interfaces in Figma matching brand tokens." },
      { step: "03", title: "Core Execution", desc: "Writing optimized Next.js modules and API endpoints." },
      { step: "04", title: "QA Checkpoint", desc: "Speed benchmark checks, link audits, and strict cross-device testing." },
      { step: "05", title: "CI/CD Rollout", desc: "Automated pipeline compilation and zero-downtime deployment." }
    ],
    faqs: [
      { q: "Do you integrate headless content management systems (CMS)?", a: "Yes, we integrate headless platforms like Sanity, Contentful, or Strapi to let non-technical team members manage content easily without altering code." },
      { q: "How do you optimize for mobile performance?", a: "We write responsive CSS grids and load optimized, modern image formats (WebP/AVIF) matching target viewport sizes." }
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    icon: Smartphone,
    category: "NATIVE & CROSS-PLATFORM SYSTEMS",
    tagline: "Fluid, high-fidelity mobile apps built for iOS and Android, focusing on intuitive UX and native capabilities.",
    overview: "We build premium mobile applications utilizing React Native and native ecosystems. We prioritize smooth 60fps scrolling, offline synchronization, secure local storage, and tight integration with hardware APIs (biometrics, camera, geo-tracking). Our engineering ensures a unified codebase without compromising on responsiveness.",
    benefits: [
      {
        title: "Cross-Platform Velocity",
        desc: "Deploy to both Apple App Store and Google Play Store from a single, high-fidelity codebase."
      },
      {
        title: "Offline-First Data",
        desc: "Integrated local storage (SQLite/WatermelonDB) keeps the app usable in low-network regions."
      },
      {
        title: "Fluid Animations",
        desc: "Micro-interactions and gesture handlers calibrated to mimic native system responsiveness."
      }
    ],
    stack: ["React Native", "TypeScript", "Expo", "SQLite", "Firebase", "App Store Connect", "Play Console"],
    process: [
      { step: "01", title: "Wireframing", desc: "Mapping mobile interaction states, navigation drawers, and tabs." },
      { step: "02", title: "Prototyping", desc: "Creating interactive touch-targets and key transitions in Figma." },
      { step: "03", title: "App Engineering", desc: "Compiling typescript screens, native bridges, and database caching." },
      { step: "04", title: "TestFlight Runs", desc: "Distributing beta builds through Apple TestFlight and Google Play tracks." },
      { step: "05", title: "Store Release", desc: "Managing compilation packaging, review guidelines, and official publication." }
    ],
    faqs: [
      { q: "Will you publish the application under our company account?", a: "Yes, we build and package the binary files, then publish them directly under your corporate Apple and Google Developer accounts." },
      { q: "Can we access native device features like biometric login?", a: "Absolutely. We routinely implement FaceID, TouchID, GPS tracking, push notifications, and bluetooth sync adapters." }
    ]
  },
  {
    id: "saas-dev",
    title: "SaaS Development",
    icon: Layers,
    category: "MULTI-TENANT APPLICATIONS",
    tagline: "Secure cloud architectures, automated billing subscriptions, and complex dashboard systems.",
    overview: "We build enterprise SaaS systems designed for multi-tenant isolation, structured data partition, and API integrations. From configuring secure login profiles (SSO, MFA) to implementing subscription structures via Stripe, we take care of the heavy infrastructure so you can focus on your business logic.",
    benefits: [
      {
        title: "Secure Isolation",
        desc: "Row-level tenant security (RLS) guarantees client database spaces never cross paths."
      },
      {
        title: "Automated Billing",
        desc: "Synchronized Stripe webhook channels handle subscription logic, downgrades, and billing errors."
      },
      {
        title: "Role-Based Access",
        desc: "Granular access matrices (RBAC) allowing admins to set customized team workspaces."
      }
    ],
    stack: ["Next.js", "Stripe API", "PostgreSQL", "Supabase", "Prisma ORM", "Redis", "AWS Cloud"],
    process: [
      { step: "01", title: "Tenant Blueprint", desc: "Defining schema relationships, subscription tiers, and billing boundaries." },
      { step: "02", title: "UI Dashboarding", desc: "Designing responsive metrics layouts and management panels." },
      { step: "03", title: "Stripe Sync", desc: "Configuring payment hooks, invoice cycles, and customer portal profiles." },
      { step: "04", title: "Security Tests", desc: "Simulating access breaches, checking rate limits, and auditing database rules." },
      { step: "05", title: "Tenant Launch", desc: "Onboarding primary beta customers and activating production billing loops." }
    ],
    faqs: [
      { q: "How do you handle subscription upgrades or downgrades?", a: "We implement Stripe's customer billing portals and sync account states on our backend in real-time via secure Webhooks." },
      { q: "Can we support single-sign-on (SSO) for enterprise clients?", a: "Yes, we can build custom authentication setups using SAML or OpenID Connect (OIDC) to link with Okta, Azure AD, or similar services." }
    ]
  },
  {
    id: "custom-soft",
    title: "Custom Software",
    icon: Cpu,
    category: "BESPOKE BUSINESS MODULES",
    tagline: "Tailor-made backend utilities, enterprise system syncs, and specialized automation pipelines.",
    overview: "We develop custom internal systems, CRM/ERP database integrations, and high-performance automation scripts. We analyze where off-the-shelf platforms fall short and compile lightweight, scalable, and secure software engines that directly eliminate operational overhead.",
    benefits: [
      {
        title: "Bespoke Algorithms",
        desc: "Logic programmed to match your exact internal business operations, workflows, and rules."
      },
      {
        title: "Legacy Integration",
        desc: "Build custom middleware adapters to synchronize records with ancient databases or internal systems."
      },
      {
        title: "Asynchronous Speed",
        desc: "Background task runners and message queues capable of crunching millions of records."
      }
    ],
    stack: ["Python", "Golang", "Docker", "gRPC", "RabbitMQ", "Celery / Redis", "PostgreSQL"],
    process: [
      { step: "01", title: "Operational Audit", desc: "Mapping current manual bottlenecks, data inputs, and system outputs." },
      { step: "02", title: "Architecture Spec", desc: "Defining database normalization structures and service boundaries." },
      { step: "03", title: "Engine Build", desc: "Coding core background processes, schedulers, and admin management UI." },
      { step: "04", title: "Integrations Check", desc: "Running data sync trials with external APIs and checking edge constraints." },
      { step: "05", title: "System Handover", desc: "Writing deployment playbooks, system logs, and holding team training sessions." }
    ],
    faqs: [
      { q: "Can you bridge cloud data with our local physical servers?", a: "Yes, we construct secure database tunnels, VPN connections, and custom API adapters to bridge local systems to the cloud." },
      { q: "What support options do you offer for custom software?", a: "We provide comprehensive deployment documentation, system architecture playbooks, and dedicated maintenance agreements." }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: Palette,
    category: "HIGH-FIDELITY PRODUCT DESIGN",
    tagline: "Aesthetic design systems and user flows centered on minimalism, clarity, and structural consistency.",
    overview: "We compile responsive wireframes, premium desktop layouts, and interactive mobile screen flows. Our design system methodology aligns spacing, typography, and color tokens directly in Figma, providing developers with clean handoffs that keep layouts exactly as drafted.",
    benefits: [
      {
        title: "Component Libraries",
        desc: "Fully organized Figma design systems with interactive states, tokens, and reusable components."
      },
      {
        title: "Interactive Prototypes",
        desc: "Clickable visual mockups demonstrating animations and screen connections before code starts."
      },
      {
        title: "WCAG Accessibility",
        desc: "Carefully checked text contrasts, layout grids, and keyboard focus outlines for universal usability."
      }
    ],
    stack: ["Figma", "Adobe Illustrator", "Principle", "Lottie Animations", "Tailwind Design Tokens"],
    process: [
      { step: "01", title: "Research & UX Map", desc: "Analyzing competitor sites, creating user profiles, and mapping flow wireframes." },
      { step: "02", title: "Visual Theme", desc: "Proposing typography systems, palettes, and visual tone boards." },
      { step: "03", title: "Layout High-Fi", desc: "Designing every screen across mobile, tablet, and desktop views." },
      { step: "04", title: "Interaction Design", desc: "Adding mock animations, scroll behaviors, and dropdown hover states." },
      { step: "05", title: "Handoff Pack", desc: "Organizing Figma inspect elements, CSS tokens, and exporting SVGs." }
    ],
    faqs: [
      { q: "Do we get ownership of the design files?", a: "Absolutely. Once the project is complete, you receive the full editable Figma design file with complete asset copyrights." },
      { q: "How are design iterations structured?", a: "We host design sprint sessions and use Figma's native comments to review and approve details asynchronously." }
    ]
  },
  {
    id: "consulting",
    title: "IT Consulting",
    icon: LineChart,
    category: "CLOUD ARCHITECTURE & STRATEGY",
    tagline: "Advisory services focused on cloud migration, security auditing, and system scaling strategy.",
    overview: "We advise scaling firms and startup teams on layout optimization, infrastructure auditing, and architectural choices. We audit existing configurations to identify performance bottlenecks, reduce cloud bills, and implement robust CI/CD guidelines.",
    benefits: [
      {
        title: "Cloud Cost Trimming",
        desc: "Analyze and clean up unused resources to reduce monthly infrastructure bills by up to 30%."
      },
      {
        title: "Bottleneck Audits",
        desc: "Pinpoint slow database queries, bad API caching, and memory leaks before they disrupt users."
      },
      {
        title: "Security Hardening",
        desc: "Audit firewall settings, access roles (IAM), and code pipelines for SOC2 compliance alignment."
      }
    ],
    stack: ["AWS Cloud", "Google Cloud", "Terraform", "Docker", "Kubernetes", "Datadog", "GitHub Actions"],
    process: [
      { step: "01", title: "Discovery & Access", desc: "Conducting a high-level walkthrough of your current architecture and logs." },
      { step: "02", title: "Diagnostic Report", desc: "Listing code issues, security leaks, and hosting cost recommendations." },
      { step: "03", title: "Strategic Roadmap", desc: "Drafting concrete timelines and priorities to refactor the architecture." },
      { step: "04", title: "Implementation Support", desc: "Working alongside your engineering team or deploying adjustments directly." },
      { step: "05", title: "Audit Verification", desc: "Re-testing the infrastructure, monitoring server loads, and confirming cost cuts." }
    ],
    faqs: [
      { q: "Can you help migrate our system from one cloud provider to another?", a: "Yes, we plan and execute secure database migrations and server updates (e.g. Heroku to AWS) with minimal to zero downtime." },
      { q: "Do you configure Infrastructure as Code (IaC)?", a: "Yes, we write custom Terraform configs so that your entire server environment can be versioned and deployed automatically." }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    category: "TECHNICAL SEO & CONVERSION ENGINE",
    tagline: "Data-driven SEO strategies, conversion audits, and user analytics setups designed for growth.",
    overview: "We optimize web platforms to rank on search engines and convert casual page visits into active clients. We build clean technical SEO foundations, configure detailed marketing tags, and run conversion rate audits on landing page paths.",
    benefits: [
      {
        title: "Technical SEO Compliance",
        desc: "Improve site structure, sitemap indices, and page load speeds to satisfy search engine crawlers."
      },
      {
        title: "A/B Conversion Focus",
        desc: "Redesign buttons, forms, and layout structures to convert client traffic into leads."
      },
      {
        title: "Attribution Setup",
        desc: "Install clean analytics pipelines (GA4, GTM) to track marketing channel metrics accurately."
      }
    ],
    stack: ["Google Analytics 4", "Google Tag Manager", "Ahrefs", "Screaming Frog", "Next.js SEO", "PostHog"],
    process: [
      { step: "01", title: "SEO Competitor Audit", desc: "Analyzing high-ranking keywords, page speeds, and competitor gaps." },
      { step: "02", title: "Keyword Matrix", desc: "Selecting high-intent search terms to drive actual purchase traffic." },
      { step: "03", title: "On-Page Tuning", desc: "Optimizing metadata, image alt texts, headers, and internal links." },
      { step: "04", title: "Conversion Setup", desc: "Refining call-to-actions, contact layouts, and speed performance." },
      { step: "05", title: "Report Review", desc: "Tracking keyword rankings, page views, and client form submissions." }
    ],
    faqs: [
      { q: "How long does it take to see organic search rank increases?", a: "Technical SEO improvements usually reflect within 4 to 8 weeks, while content authority rankings build steadily over 3 to 6 months." },
      { q: "Do you run paid advertisement campaigns?", a: "Our core marketing service focuses on organic visibility (SEO) and site conversion audits (CRO). We can help set up tracking tags for your paid campaigns." }
    ]
  }
];

export function ServicesClient() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentService = servicesData.find((s) => s.id === activeTab) || servicesData[0];
  const ServiceIcon = currentService.icon;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-16">
      {/* 1. Interactive Tabs Bar */}
      <div className="border-b border-surface/80 pb-4 overflow-x-auto scrollbar-none flex gap-2 md:justify-center">
        <div className="flex gap-2 p-1 bg-card/30 border border-surface/50 rounded-lg max-w-full">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => {
                  setActiveTab(service.id);
                  setOpenFaq(null); // Reset FAQ state on switch
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "text-muted hover:text-text-main hover:bg-surface/55"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-muted"} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Details Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Block - Overview & Technical Badges */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Badge variant="primary">{currentService.category}</Badge>
              <h2 className="text-text-main font-display font-bold text-3xl md:text-4xl leading-tight">
                {currentService.title}
              </h2>
              <p className="text-text-main font-sans text-base md:text-lg leading-relaxed font-medium">
                {currentService.tagline}
              </p>
              <p className="text-muted font-sans text-sm md:text-base leading-relaxed">
                {currentService.overview}
              </p>
            </div>

            {/* Tech Stack Block */}
            <div className="border border-surface bg-card/20 p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-text-main uppercase tracking-wider">
                <Clock size={14} className="text-primary" />
                <span>Engineering Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentService.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-surface border border-surface-variant text-xs font-sans font-medium text-muted hover:text-text-main hover:border-muted/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits Block (Grid) */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-bold text-text-main uppercase tracking-widest">
                Service Delivery Advantages
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentService.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-card/40 border border-surface p-5 rounded-lg hover:border-primary/20 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded bg-surface flex items-center justify-center text-primary mb-3">
                      <CheckCircle2 size={14} />
                    </div>
                    <h5 className="text-xs font-display font-bold text-text-main mb-1.5 leading-snug">
                      {benefit.title}
                    </h5>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block - Timeline Process & Specific FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Timeline Process */}
            <div className="border border-surface bg-card/30 p-6 rounded-lg space-y-6">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-text-main uppercase tracking-wider pb-3 border-b border-surface">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Implementation Timeline</span>
              </div>

              <div className="space-y-6">
                {currentService.process.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative group">
                    {/* Visual Line connector */}
                    {idx < currentService.process.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-[-24px] w-[1px] bg-surface-variant/40" />
                    )}
                    
                    <div className="w-8 h-8 rounded-full bg-surface border border-surface-variant flex items-center justify-center text-[11px] font-mono font-bold text-primary shrink-0 z-10">
                      {p.step}
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-display font-bold text-text-main group-hover:text-primary transition-colors">
                        {p.title}
                      </h5>
                      <p className="text-[11px] text-muted leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom FAQs */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-bold text-text-main uppercase tracking-widest flex items-center gap-2">
                <HelpCircle size={14} className="text-primary" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {currentService.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-surface bg-card/20 rounded-md overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-card/40 transition-colors"
                      >
                        <span className="text-xs font-sans font-bold text-text-main pr-4">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp size={14} className="text-muted shrink-0" />
                        ) : (
                          <ChevronDown size={14} className="text-muted shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-surface/30 border-t border-surface/50"
                          >
                            <p className="p-4 text-[11px] text-muted leading-relaxed font-sans">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 3. Global Consultation Callout Card */}
      <div className="border border-surface bg-card/30 p-8 md:p-10 rounded-lg text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_120%,rgba(99,102,241,0.06),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <Badge variant="accent">Technical Discovery</Badge>
          <h3 className="text-text-main font-display font-bold text-2xl md:text-3xl tracking-tight">
            Need a tailor-made implementation setup?
          </h3>
          <p className="text-muted font-sans text-sm max-w-lg mx-auto leading-relaxed">
            Schedule a session with our principal engineers. We will review your database workflows, scalability parameters, and integration requirements.
          </p>
          <div className="flex justify-center pt-2">
            <Button href="/contact" variant="primary" size="md">
              Schedule Engineering Review
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
