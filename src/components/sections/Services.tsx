"use client";

import { useEffect, useRef } from "react";
import {
  Code2,
  Smartphone,
  Layers,
  Cpu,
  Palette,
  LineChart,
  Megaphone,
} from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { SplitText } from "@/components/ui/SplitText";
import { gsap, ScrollTrigger } from "@/lib/gsapInit";

const services = [
  { icon: Code2, title: "Web Development", description: "High-performance web applications and portal runtimes engineered to be fast, responsive, and secure." },
  { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile solutions for iOS and Android built for exceptional user utility." },
  { icon: Layers, title: "SaaS Development", description: "Multi-tenant cloud architectures, billing systems, and administration portals scaled for modern SaaS operations." },
  { icon: Cpu, title: "Custom Software", description: "Bespoke database-backed systems and integrations crafted to fit your enterprise's distinct operational workflows." },
  { icon: Palette, title: "UI/UX Design", description: "Premium user research and digital interfaces emphasizing minimalism, visual clarity, and clean structures." },
  { icon: LineChart, title: "IT Consulting", description: "Strategic cloud architecture advisory and roadmap planning to optimize your engineering division's output." },
  { icon: Megaphone, title: "Digital Marketing", description: "Data-driven organic search strategy (SEO) and campaign management optimized to drive conversion performance." },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".service-card-wrapper");
    if (cards.length === 0) return;

    // Set 3D initial state
    gsap.set(cards, {
      opacity: 0,
      y: 40,
      rotationX: 10,
      transformPerspective: 1000,
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.7,
          stagger: 0.1,
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
    <section id="services" className="py-24 lg:py-32" style={{ background: "#3a2234" }}>
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6">
        
        {/* Heading — white text on dark */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)", color: "#939eeb" }}
          >
            Our Services
          </span>
          <h2
            className="font-display font-medium mx-auto"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.22,
              letterSpacing: "-0.6px",
              maxWidth: 700,
              color: "#ffffff",
            }}
          >
            <SplitText
              text="Technical solutions engineered with precision, scalability, and impact."
              type="words"
              triggerSelector="#services"
            />
          </h2>
        </div>

        {/* 3D card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card-wrapper">
                <Card3D
                  className="h-full shimmer-hover"
                  style={{ background: "#ffffff", borderRadius: 24, padding: 32 }}
                  intensity={6}
                >
                  <div
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-6 shrink-0"
                    style={{ background: "#f3f3f3" }}
                  >
                    <Icon size={18} className="text-black stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-medium text-black mb-3" style={{ fontSize: 17, lineHeight: 1.35 }}>
                    {service.title}
                  </h3>
                  <p className="font-sans text-black/55 leading-relaxed" style={{ fontSize: 14 }}>
                    {service.description}
                  </p>
                </Card3D>
              </div>
            );
          })}
        </div>

        {/* 7th service wide */}
        {services[6] && (
          <div className="service-card-wrapper mt-5">
            <Card3D
              className="shimmer-hover"
              style={{ background: "#ffffff", borderRadius: 24, padding: 32, display: "flex", alignItems: "center", gap: 24 }}
              intensity={3}
            >
              {(() => {
                const Icon = services[6].icon;
                return (
                  <>
                    <div className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "#f3f3f3" }}>
                      <Icon size={18} className="text-black stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-black mb-1" style={{ fontSize: 17 }}>
                        {services[6].title}
                      </h3>
                      <p className="font-sans text-black/55 leading-relaxed" style={{ fontSize: 14 }}>
                        {services[6].description}
                      </p>
                    </div>
                  </>
                );
              })()}
            </Card3D>
          </div>
        )}
      </div>
    </section>
  );
}

