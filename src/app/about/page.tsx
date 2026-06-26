import type { Metadata } from "next";
import { MapPin, Users, Target, ShieldAlert, CheckCircle, Lightbulb, Compass, Award, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About Us | GenMatrixo",
  description:
    "We are a team of principal developers and system architects building high-fidelity web apps, mobile solutions, and custom software platforms.",
};

const locations = [
  {
    city: "Jaipur",
    state: "Rajasthan",
    address: "Mansarovar, Jaipur, RJ 302020",
    role: "Jaipur Headquarters",
  },
  {
    city: "Bhilwara",
    state: "Rajasthan",
    address: "Chandra Shekhar Azad Nagar, Bhilwara, RJ 311001",
    role: "Bhilwara Branch Office",
  },
];

const team = [
  { name: "Aman Sharma", role: "Principal Architect & Founder", initials: "AS" },
  { name: "Rahul Verma", role: "Lead Systems Engineer", initials: "RV" },
  { name: "Pooja Choudhary", role: "UI/UX Product Designer", initials: "PC" },
  { name: "Neeraj Gupta", role: "Cloud Infrastructure Specialist", initials: "NG" },
];

const values = [
  { title: "Professionalism", desc: "We adhere strictly to engineering best practices, maintaining robust documentation and clear code hygiene.", icon: Award },
  { title: "Premium Quality", desc: "Every component we design is crafted with pixel-level precision, offering cohesive structures and state transitions.", icon: Lightbulb },
  { title: "Modern Architecture", desc: "We build modular, fast, and scalable systems using modern technology frameworks (Next.js, NestJS, Kafka).", icon: Compass },
  { title: "Technical Trustworthiness", desc: "Client data security and transaction safety are central focus items across our development lifecycle.", icon: CheckCircle },
  { title: "Enterprise Readiness", desc: "We plan database normalization, caching protocols, and zero-trust networking parameters for high load.", icon: Users },
  { title: "Technical Authority", desc: "We prioritize solving real-world business bottlenecks with architectural rigor and strategic consulting.", icon: Target },
];

const milestones = [
  { year: "2021", title: "Foundation", desc: "GenMatrixo was founded in Jaipur with a vision to deliver premium software engineering consulting." },
  { year: "2022", title: "SaaS Expansion", desc: "Designed and launched our first multi-tenant SaaS portal, managing thousands of active users." },
  { year: "2023", title: "High-Load Optimization", desc: "Scaled database clusters and synchronization streams for retail and fintech portfolios." },
  { year: "2024", title: "Compliance Certified", desc: "Implemented secured encrypted pipelines, successfully achieving HIPAA compliance standards." },
  { year: "2025", title: "Global Studio", desc: "Expanding custom software engineering services to startups and enterprises internationally." },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="bg-background pt-36 pb-20 relative overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
          <FadeUp>
            <div className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-3">
              <Link href="/" className="hover:text-text-main">Home</Link> / About Us
            </div>
            <h1 className="text-text-main font-display font-bold text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-tight mb-6">
              Engineering Scalable Systems with Uncompromising Quality
            </h1>
            <p className="text-muted font-sans text-base max-w-2xl leading-relaxed">
              We are a team of principal developers, software engineers, and technology consultants dedicated to building high-fidelity web, mobile, and custom cloud platforms.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Company Story Split Layout */}
      <section className="bg-surface py-20 lg:py-28 border-b border-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <FadeUp className="lg:col-span-7 space-y-6">
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold block">
                Our Story
              </span>
              <h2 className="text-text-main font-display font-bold text-3xl sm:text-4xl leading-tight">
                Our Pedigree & Engineering Focus
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                GenMatrixo was founded to bridge the gap between business goals and technical execution. We avoid generic templates or low-code shortcuts; instead, we design bespoke database-backed software architectures suited to target operations.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Our divisions prioritize code hygiene, thorough documentation, and rigorous benchmark testing. From designing microservice event loops to configuring distributed caches, we build software engineered to perform.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="lg:col-span-5">
              <div className="border border-surface bg-card p-8 rounded-lg shadow-lg relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-primary/30">// architecture metadata</div>
                <h4 className="font-display font-bold text-xs uppercase text-primary mb-8 tracking-widest">
                  GENMATRIXO SYSTEM BENCHMARKS
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-sans text-text-main tracking-wider mb-2 font-medium">
                      <span>Code Hygiene Audits</span>
                      <span className="font-mono text-accent">99.8%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[99.8%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans text-text-main tracking-wider mb-2 font-medium">
                      <span>Average Latency Reduction</span>
                      <span className="font-mono text-accent">-72%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full w-[72%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans text-text-main tracking-wider mb-2 font-medium">
                      <span>Tenant Integration Uptime</span>
                      <span className="font-mono text-accent">99.99%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full w-[99.99%]" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-background py-20 lg:py-28 border-b border-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold block mb-3">
                Core Principles
              </span>
              <h2 className="text-text-main font-display font-bold tracking-tight text-3xl sm:text-4xl">
                What Guides GenMatrixo
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={val.title}>
                  <div className="bg-card/40 border border-surface p-6 rounded-lg hover:border-primary/20 transition-all duration-200 h-full flex flex-col justify-start">
                    <div className="w-10 h-10 bg-surface flex items-center justify-center text-primary rounded-md mb-4 shrink-0">
                      <Icon size={18} className="stroke-[1.5]" />
                    </div>
                    <h3 className="text-sm font-display font-bold text-text-main mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Leadership & Engineering Team */}
      <section className="bg-surface py-20 lg:py-28 border-b border-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold block mb-3">
                The Architects
              </span>
              <h2 className="text-text-main font-display font-bold tracking-tight text-3xl sm:text-4xl">
                Our Engineering Team
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-card/45 border border-surface p-6 rounded-lg text-center flex flex-col items-center hover:border-primary/20 transition-all duration-200">
                  <div className="w-16 h-16 rounded-full bg-surface border border-surface-variant flex items-center justify-center text-lg font-display font-bold text-primary mb-4 shrink-0 shadow-inner">
                    {member.initials}
                  </div>
                  <h4 className="text-sm font-display font-bold text-text-main mb-1">
                    {member.name}
                  </h4>
                  <span className="text-xs text-muted font-sans block">
                    {member.role}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Chronological Milestones Timeline */}
      <section className="bg-background py-20 lg:py-28 border-b border-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold block mb-3">
                Our Milestones
              </span>
              <h2 className="text-text-main font-display font-bold tracking-tight text-3xl sm:text-4xl">
                The Journey So Far
              </h2>
            </div>
          </FadeUp>

          <div className="relative border-l border-surface ml-4 md:ml-6 space-y-12">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-8 group">
                {/* Bullet */}
                <div className="absolute -left-1.5 top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-200" />
                
                <span className="text-xs font-mono font-bold text-primary block mb-1">
                  {milestone.year}
                </span>
                <h4 className="text-sm font-display font-bold text-text-main mb-2">
                  {milestone.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed max-w-2xl">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Physical Studio Locations */}
      <section className="bg-surface py-20 lg:py-28 border-b border-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="mb-12 text-center lg:text-left">
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold block mb-3">
                Presence
              </span>
              <h2 className="text-text-main font-display font-bold text-3xl sm:text-4xl">
                Where We Engineer From
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {locations.map((loc) => (
              <StaggerItem key={loc.city}>
                <div className="border border-surface bg-card p-6 flex items-start gap-4 rounded-lg hover:border-primary/20 transition-all duration-200 h-full">
                  <div className="w-10 h-10 flex items-center justify-center text-primary bg-surface border border-surface-variant rounded shrink-0">
                    <MapPin size={16} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-primary mb-1 block">
                      {loc.role}
                    </span>
                    <div className="text-base font-display font-bold text-text-main mb-1.5">
                      {loc.city}, {loc.state}
                    </div>
                    <div className="text-xs text-muted leading-relaxed">
                      {loc.address}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Consultation Call CTA */}
      <section className="bg-background py-20 lg:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_110%,rgba(99,102,241,0.06),rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold block mb-3">
              Consultation
            </span>
            <h2 className="text-text-main font-display font-bold mb-4 text-3xl sm:text-4xl">
              Ready to scale your digital infrastructure?
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-md text-sm leading-relaxed">
              Request an engineering architecture session with our principal team to outline a custom software roadmap.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Schedule Engineering Review
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
