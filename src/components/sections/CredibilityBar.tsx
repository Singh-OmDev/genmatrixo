"use client";

import { useEffect, useRef } from "react";
import { Users, CheckCircle, Calendar, Heart } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { gsap, ScrollTrigger } from "@/lib/gsapInit";

const facts = [
  { icon: CheckCircle, label: "Projects Delivered", value: 50, suffix: "+", tint: "#d4f7e6" },
  { icon: Users,       label: "Businesses Served",  value: 20, suffix: "+", tint: "#ffccf7" },
  { icon: Calendar,    label: "Years Experience",    value: 4,  suffix: "+", tint: "#ffeecc" },
  { icon: Heart,       label: "Client Satisfaction", value: 95, suffix: "%", tint: "#e8e8fc" },
];

export function CredibilityBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".metric-card");
    
    // Set initial card states
    gsap.set(cards, { y: 25, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        // Stagger card reveals
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Trigger count-up for numbers
        cards.forEach((card) => {
          const numEl = card.querySelector(".metric-number");
          if (!numEl) return;

          const targetValue = parseInt(numEl.getAttribute("data-target") || "0", 10);
          const obj = { val: 0 };

          gsap.to(obj, {
            val: targetValue,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              numEl.textContent = Math.floor(obj.val).toString();
            },
          });
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="metric-card">
                <Card3D
                  intensity={10}
                  style={{ background: fact.tint, borderRadius: 24 }}
                  className="shimmer-hover"
                >
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "rgba(0,0,0,0.08)" }}
                    >
                      <Icon size={18} className="text-black stroke-[1.5]" />
                    </div>
                    <div
                      className="font-display font-medium text-black leading-none mb-2"
                      style={{ fontSize: 42, letterSpacing: "-0.03em" }}
                    >
                      <span className="metric-number" data-target={fact.value}>
                        {fact.value}
                      </span>
                      {fact.suffix}
                    </div>
                    <div className="text-[12px] font-medium text-black/50 uppercase tracking-wider">
                      {fact.label}
                    </div>
                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

