"use client";

import { useEffect, useRef } from "react";
import { Search, PenTool, LayoutTemplate, Code2, Rocket, HeartHandshake } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { gsap, ScrollTrigger } from "@/lib/gsapInit";

const tints = ["#d4f7e6", "#e8e8fc", "#ffeecc", "#ffccf7", "#eddee9", "#f3f3f3"];

const steps = [
  { phase: "01", title: "Discovery",   description: "Identify project goals, user personas, and technical requirements through thorough stakeholder consulting.",        icon: Search },
  { phase: "02", title: "Planning",    description: "Formulate product specifications, user story maps, architecture designs, and development schedules.",                icon: PenTool },
  { phase: "03", title: "Design",      description: "Develop high-fidelity interactive prototypes, responsive layout frameworks, and digital brand design systems.",      icon: LayoutTemplate },
  { phase: "04", title: "Development", description: "Build clean, modular, and optimized front-ends and back-ends using modern frameworks and testing suites.",           icon: Code2 },
  { phase: "05", title: "Deployment",  description: "Orchestrate staging runs, perform penetration audits, and launch production containers to secure cloud grids.",     icon: Rocket },
  { phase: "06", title: "Support",     description: "Provide continuous feature updates, security patches, database optimizations, and SLA-backed uptime monitoring.", icon: HeartHandshake },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".process-card");
    const badges = container.querySelectorAll(".process-badge");

    // Initialize initial states for clean GSAP entrance
    gsap.set(cards, { opacity: 0, y: 30 });
    gsap.set(badges, { scale: 0, rotation: -20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
    });

    tl.to(
      badges,
      {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.8)",
      },
      "-=0.5" // overlap with card fade-in
    );

    return () => {
      // Clean up specific scroll trigger
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full text-black/50"
            style={{ background: "#f3f3f3" }}
          >
            How We Work
          </span>
          <h2
            className="font-display font-medium text-black mx-auto mb-4"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.22, letterSpacing: "-0.5px", maxWidth: 600 }}
          >
            Our Development Process
          </h2>
          <p className="text-black/50 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.6 }}>
            A structured lifecycle designed to build reliable, high-performance software with zero engineering friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.phase} className="process-card">
                <Card3D
                  className="h-full shimmer-hover"
                  style={{ background: tints[idx % tints.length], borderRadius: 24, padding: 32 }}
                  intensity={7}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="process-badge sticker-pop inline-flex items-center justify-center w-9 h-9 rounded-full font-mono font-bold text-[13px]"
                      style={{ background: "#3cdd8c", color: "#000" }}
                    >
                      {step.phase}
                    </span>
                    <div
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                      style={{ background: "rgba(0,0,0,0.07)" }}
                    >
                      <Icon size={17} className="text-black stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="font-display font-medium text-black mb-3" style={{ fontSize: 17, lineHeight: 1.35 }}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-black/55 leading-relaxed" style={{ fontSize: 14 }}>
                    {step.description}
                  </p>
                </Card3D>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

