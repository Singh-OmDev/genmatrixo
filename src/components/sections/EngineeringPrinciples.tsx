import { Sparkles, Gauge, Lock } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const principles = [
  {
    icon: Sparkles,
    title: "Simplicity",
    desc: "We build clean solutions with minimal code paths. Eliminating unnecessary layers ensures that systems remain maintainable, auditable, and exceptionally fast.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    desc: "From database querying index rules to browser assets bundles caching, latency reduction is built into every layer of our technical workflow.",
  },
  {
    icon: Lock,
    title: "Hardened Security",
    desc: "We audit data flow logic, set up zero-trust cloud network parameters, and compile applications to prevent leaks, hacks, or system intrusions.",
  },
];

export function EngineeringPrinciples() {
  return (
    <section className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
            Engineering standards
          </span>
          <h2 className="text-pure-black font-display font-normal mb-12 tracking-tight">
            How we think about quality.
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <div
                  className="h-full bg-paper border border-hairline p-6 relative overflow-hidden shadow-none hover:border-stone-border transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  {/* Featherlight 10px icon container */}
                  <div 
                    className="w-12 h-12 bg-canvas-inner border border-hairline flex items-center justify-center mb-6 text-charcoal" 
                    style={{ borderRadius: "10px" }}
                  >
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-pure-black font-display font-normal text-subheading mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-graphite leading-relaxed tracking-[0.1em]">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
