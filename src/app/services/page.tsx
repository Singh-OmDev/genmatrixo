import type { Metadata } from "next";
import { 
  Brain, 
  Code2, 
  Boxes, 
  ShieldCheck, 
  Building, 
  Activity, 
  Utensils, 
  ShoppingCart, 
  Dumbbell, 
  Key, 
  Plane, 
  GraduationCap, 
  Cpu,
  ArrowRight 
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — GenMatrixo Systems Offerings",
  description:
    "Explore our technical capabilities: AI integrations, custom web architecture, system auditing, and secure cloud pipelines.",
};

const serviceCapabilities = [
  {
    icon: Brain,
    category: "AI & ML PIPELINES",
    title: "Artificial Intelligence & Neural Systems",
    desc: "We deploy robust AI microservices. This includes structuring custom RAG pipelines, compiling semantic datasets, training custom regression predictors, and embedding agent workflows that automate office tasks deterministically.",
    stack: ["OpenAI API", "pgvector", "PyTorch", "FastAPI"],
  },
  {
    icon: Code2,
    category: "FULL-STACK APPLICATIONS",
    title: "Custom Web Systems & Platforms",
    desc: "We design custom web runtimes that scale to hundreds of concurrent client connections without memory leaks. By prioritizing database indexes, load balancing, and structured JSON APIs, we deliver blindingly fast web platforms.",
    stack: ["TypeScript", "React / Next.js", "PostgreSQL", "Node.js"],
  },
  {
    icon: Boxes,
    category: "SYSTEMS DEVELOPMENT",
    title: "Bespoke Software Modules",
    desc: "We compile high-performance backend utilities for processing large streams of operational data. We build custom synchronization utilities, automation handlers, and system daemons tailored to automate logic securely.",
    stack: ["Python", "Go Lang", "Docker", "gRPC APIs"],
  },
  {
    icon: ShieldCheck,
    category: "CLOUD & SECURITY",
    title: "IT Strategy & Cloud Optimization",
    desc: "We audit legacy servers to remove vulnerabilities, optimize cloud hosting expenditures, implement secure CI/CD pipelines, and prepare server layouts for zero-downtime deployment environments.",
    stack: ["AWS Cloud", "Terraform", "Docker / K8s", "CI/CD YAML"],
  },
];

const industries = [
  { icon: Building, title: "Real Estate Systems" },
  { icon: Activity, title: "Healthcare & Clinical Portals" },
  { icon: Utensils, title: "Hospitality & Restaurant chains" },
  { icon: ShoppingCart, title: "High-Traffic E-commerce" },
  { icon: Dumbbell, title: "Fitness & Subscription Networks" },
  { icon: Key, title: "Luxury Hotels & Bookings" },
  { icon: Plane, title: "Travel & Global Logistics" },
  { icon: GraduationCap, title: "Education & Learning Hubs" },
  { icon: Cpu, title: "Manufacturing & Supply ERPs" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section 
        className="bg-canvas border-b border-hairline pt-36 pb-20 overflow-hidden relative"
        style={{ backgroundImage: "var(--gradient-sky-wash)" }}
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-3">
              <Link href="/" className="hover:text-pure-black">Home</Link> / Services
            </div>
            <h1 className="text-pure-black font-display font-normal mt-4 mb-5 max-w-2xl leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, var(--text-display-lg))" }}>
              Our Capabilities
            </h1>
            <p className="text-graphite font-sans text-sm tracking-[0.1em] leading-relaxed max-w-2xl">
              Specialized engineering workflows focused on automation, scale, and high information throughput.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-canvas border-b border-hairline py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.title}>
                  <div 
                    className="h-full border border-hairline bg-paper p-8 flex flex-col justify-between shadow-none"
                    style={{ borderRadius: "10px" }}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        {/* 10px rounded icon container */}
                        <div 
                          className="w-12 h-12 bg-canvas-inner border border-hairline flex items-center justify-center text-charcoal" 
                          style={{ borderRadius: "10px" }}
                        >
                          <Icon size={20} className="stroke-[1.5]" />
                        </div>
                        <Badge variant="mono">{cap.category}</Badge>
                      </div>

                      <h3 className="text-xl font-display font-normal text-pure-black mb-4 tracking-tight leading-snug">
                        {cap.title}
                      </h3>
                      <p className="font-sans text-xs text-graphite tracking-[0.1em] leading-relaxed mb-8">
                        {cap.desc}
                      </p>
                    </div>

                    <div>
                      <div className="border-t border-hairline pt-5">
                        <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-3">
                          Technology Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cap.stack.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded-pill bg-canvas-inner border border-hairline text-[10px] font-sans font-medium text-graphite tracking-[0.1em]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries We Support Section (Vertics) */}
      <section className="bg-canvas border-b border-hairline py-24 lg:py-32" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="mb-12">
              <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                Vertics
              </span>
              <h2 className="text-pure-black font-display font-normal tracking-tight">
                Industries we serve.
              </h2>
              <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed mt-3 max-w-xl">
                We deploy custom engineering templates across complex market operations.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const IndIcon = ind.icon;
              return (
                <StaggerItem key={ind.title}>
                  <div 
                    className="bg-paper border border-hairline p-6 flex flex-col justify-between h-[160px] shadow-none"
                    style={{ borderRadius: "10px" }}
                  >
                    <IndIcon size={20} className="text-graphite stroke-[1.5]" />
                    <h4 className="text-base font-display font-normal text-pure-black tracking-tight">
                      {ind.title}
                    </h4>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 bg-canvas overflow-hidden border-t border-hairline" style={{ borderBottom: "none" }}>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
              Architecture
            </span>
            <h2 className="text-pure-black font-display font-normal mb-4 tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
              Need a custom feature set?
            </h2>
            <p className="font-sans text-xs text-graphite mx-auto mb-8 max-w-md leading-relaxed tracking-[0.1em]">
              We consult on complex data challenges and deploy solutions under rigid timeframes.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-sans font-semibold bg-lime-spark text-charcoal border border-lime-spark rounded-pill hover:bg-[#d5eb9b] hover:border-[#d5eb9b] tracking-[0.1em] transition-all uppercase"
              >
                Schedule Engineering Review
                <ArrowRight size={14} className="stroke-[1.5]" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
