"use client";

import { useEffect, useRef } from "react";
import { Building2, Heart, GraduationCap, ShoppingCart, Landmark, Plane } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { SplitText } from "@/components/ui/SplitText";
import { gsap, ScrollTrigger } from "@/lib/gsapInit";

const industries = [
  { icon: Heart,         title: "Healthcare",  desc: "HIPAA-compliant platforms, telemetry integrations, and scheduling workflows." },
  { icon: GraduationCap, title: "Education",   desc: "Custom learning management portals, secure student data structures, and APIs." },
  { icon: ShoppingCart,  title: "E-Commerce",  desc: "High-performance store runtimes, subscription billing, and gateway sync." },
  { icon: Building2,     title: "Real Estate", desc: "Dynamic listings directories, tenant management databases, and CRM tools." },
  { icon: Landmark,      title: "Finance",     desc: "Secure transaction engines, distributed ledger trackers, and dashboard stats." },
  { icon: Plane,         title: "Hospitality", desc: "Booking portals, room scheduling sync pipelines, and customer support channels." },
];

export function IndustriesWeServe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".industry-card-wrapper");
    if (cards.length === 0) return;

    gsap.set(cards, { opacity: 0, x: 25 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section id="industries" className="py-24 lg:py-32" style={{ background: "#7575f0" }}>
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: title — BLACK text on violet */}
          <div className="lg:col-span-4">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.28)", color: "#000" }}
            >
              Market Expertise
            </span>
            <h2
              className="font-display font-medium mb-5"
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                lineHeight: 1.18,
                letterSpacing: "-0.5px",
                color: "#000000",
              }}
            >
              <SplitText text="Industries We Serve" type="words" triggerSelector="#industries" />
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#000", opacity: 0.65, maxWidth: 340 }}>
              We design and build bespoke software tailored to solve industry-specific operational challenges.
            </p>
          </div>

          {/* Right: 3D white cards on violet */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.title} className="industry-card-wrapper">
                    <Card3D
                      className="shimmer-hover"
                      style={{ background: "#ffffff", borderRadius: 16, padding: 24, display: "flex", alignItems: "flex-start", gap: 16 }}
                      intensity={8}
                    >
                      <div
                        className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                        style={{ background: "#f3f3f3" }}
                      >
                        <Icon size={17} className="text-black stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-black mb-1" style={{ fontSize: 15 }}>
                          {ind.title}
                        </h4>
                        <p className="font-sans text-black/55 leading-relaxed" style={{ fontSize: 13 }}>
                          {ind.desc}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

