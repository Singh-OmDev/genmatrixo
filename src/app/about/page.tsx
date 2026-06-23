import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About GenMatrixo — Premium Systems Engineering Principles",
  description:
    "GenMatrixo is a team of principal developers and system architects creating high-fidelity AI systems and enterprise software platforms.",
};

const locations = [
  {
    city: "Jaipur",
    state: "Rajasthan",
    address: "Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, RJ 302020",
    role: "Jaipur Headquarters",
  },
  {
    city: "Bhilwara",
    state: "Rajasthan",
    address: "Chandra Shekhar Azad Nagar, Bhilwara, RJ 311001",
    role: "Bhilwara Branch Office",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header / Breadcrumbs */}
      <section 
        className="bg-canvas border-b border-hairline pt-36 pb-20 overflow-hidden relative"
        style={{ backgroundImage: "var(--gradient-sky-wash)" }}
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-3">
              <Link href="/" className="hover:text-pure-black">Home</Link> / About Us
            </div>
            <h1 className="text-pure-black font-display font-normal mt-4 mb-5 max-w-2xl leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, var(--text-display-lg))" }}>
              About GenMatrixo
            </h1>
            <p className="text-graphite font-sans text-sm tracking-[0.1em] leading-relaxed max-w-2xl">
              We are a team of systems developers and AI engineers focused on building scalable, reliable, and performance-tuned software solutions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="bg-canvas border-b border-hairline py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div>
                <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                  Our Pedigree
                </span>
                <h2 className="text-pure-black font-display font-normal mt-3 mb-6 tracking-tight">
                  Trusted engineering with 4+ years of deployment experience.
                </h2>
                <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed mb-6 font-medium">
                  We avoid generic template solutions and build software architectures specifically matched to each organization&apos;s technical needs.
                </p>
                <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed">
                  Our engineering team prioritizes code hygiene, documentation, and performance benchmarks. From designing cloud systems to compiling fine-tuned vector databases, we ensure your tech stack operates seamlessly.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              {/* GenMatrixo System Metrics */}
              <div 
                className="border border-hairline bg-paper p-8 shadow-none"
                style={{ borderRadius: "10px" }}
              >
                <h4 className="font-mono text-xs uppercase text-lime-bolt mb-8 tracking-[0.1em] font-semibold">
                  GENMATRIXO SYSTEM METRICS
                </h4>
                
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-sans text-ink tracking-[0.1em] mb-2 font-medium">
                    <span>Code Hygiene Rating</span>
                    <span className="font-mono font-semibold text-pure-black">99.8%</span>
                  </div>
                  <div className="h-2.5 bg-canvas-inner border border-hairline overflow-hidden" style={{ borderRadius: "999px" }}>
                    <div 
                      className="h-full bg-lime-spark transition-all duration-500" 
                      style={{ width: "99.8%" }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-xs font-sans text-ink tracking-[0.1em] mb-2 font-medium">
                    <span>Latency Reduction (Avg)</span>
                    <span className="font-mono font-semibold text-pure-black">-65%</span>
                  </div>
                  <div className="h-2.5 bg-canvas-inner border border-hairline overflow-hidden" style={{ borderRadius: "999px" }}>
                    <div 
                      className="h-full bg-lime-spark transition-all duration-500" 
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-sans text-ink tracking-[0.1em] mb-2 font-medium">
                    <span>Integration Uptime Goal</span>
                    <span className="font-mono font-semibold text-pure-black">99.99%</span>
                  </div>
                  <div className="h-2.5 bg-canvas-inner border border-hairline overflow-hidden" style={{ borderRadius: "999px" }}>
                    <div 
                      className="h-full bg-[#22c55e] transition-all duration-500" 
                      style={{ width: "99.99%" }}
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <EngineeringPrinciples />

      {/* Locations */}
      <section className="bg-canvas border-b border-hairline py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="mb-12">
              <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                Locations
              </span>
              <h2 className="text-pure-black font-display font-normal tracking-tight">
                Where we work from.
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {locations.map((loc) => (
              <StaggerItem key={loc.city}>
                <div 
                  className="border border-hairline bg-paper p-6 flex items-start gap-4 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  <div 
                    className="w-10 h-10 flex items-center justify-center text-charcoal bg-canvas-inner border border-hairline shrink-0" 
                    style={{ borderRadius: "10px" }}
                  >
                    <MapPin size={16} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-1.5">
                      {loc.role}
                    </div>
                    <div className="text-base font-display font-normal text-pure-black mb-1.5 tracking-tight">
                      {loc.city}, {loc.state}
                    </div>
                    <div className="text-xs font-sans text-graphite tracking-[0.1em] leading-relaxed">
                      {loc.address}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-20 lg:py-28 bg-canvas overflow-hidden border-t border-hairline" style={{ borderBottom: "none" }}>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
              Join Us
            </span>
            <h2 className="text-pure-black font-display font-normal mb-4 tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
              Let&apos;s build together.
            </h2>
            <p className="font-sans text-xs text-graphite mx-auto mb-8 max-w-md leading-relaxed tracking-[0.1em]">
              Request an engineering session with our core team to design a blueprint for your custom software needs.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-sans font-semibold bg-lime-spark text-charcoal border border-lime-spark rounded-pill hover:bg-[#d5eb9b] hover:border-[#d5eb9b] tracking-[0.1em] transition-all uppercase"
              >
                Schedule Engineering Review
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
