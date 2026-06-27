"use client";

import { useEffect, useRef } from "react";
import { Cpu, ShieldCheck, ArrowRight, TrendingUp, Box } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";
import { gsap, ScrollTrigger } from "@/lib/gsapInit";

const projects = [
  {
    title: "Apex Fintech Portal",
    category: "Enterprise SaaS & Finance",
    challenge: "High transactional database bottlenecks during peak trading windows, causing latency and data delays.",
    solution: "Designed a reactive microservices engine with Redis distributed caching and Apache Kafka event synchronization streams.",
    results: "99.99% system uptime, 72% average load time reduction, and stable transaction scaling to 10k/sec.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Kafka", "AWS"],
    icon: Cpu,
    tint: "#e8e8fc",
  },
  {
    title: "CarePulse Health Platform",
    category: "HIPAA-Compliant Healthcare App",
    challenge: "Fragmented clinical database scheduling systems causing high manual data entry overhead and security risks.",
    solution: "Engineered an end-to-end encrypted synchronization runtime for healthcare scheduling and patient vitals telemetry.",
    results: "40% reduction in client scheduling overhead and zero compliance violations, achieving full HIPAA audit certification.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "AWS KMS", "Docker"],
    icon: ShieldCheck,
    tint: "#d4f7e6",
  },
  {
    title: "SwiftCart E-Commerce Hub",
    category: "High-Traffic Retail SaaS",
    challenge: "High cart abandonment rates due to slow page loads and out-of-sync inventory databases during flash sales.",
    solution: "Designed a globally distributed Next.js storefront utilizing serverless Edge handlers and Stripe webhook processing.",
    results: "34% checkout conversion increase, 99.98% platform reliability, and sub-100ms API response times globally.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS", "Edge Functions"],
    icon: Box,
    tint: "#ffeecc",
  },
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Only apply sticky stack scroll animations on desktop screens (>=1024px)
    if (window.innerWidth < 1024) return;

    const cards = containerRef.current?.querySelectorAll(".case-study-card");
    if (!cards || cards.length === 0) return;

    const animations: gsap.core.Tween[] = [];

    cards.forEach((card, idx) => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      // Don't animate the final card in the stack
      if (idx === cards.length - 1) return;

      const nextCard = cards[idx + 1];

      const anim = gsap.to(cardInner, {
        scale: 0.92,
        opacity: 0.55,
        filter: "blur(4px)",
        scrollTrigger: {
          trigger: nextCard,
          start: "top 85%", // Starts scaling down when the next card enters the screen
          end: "top 35%",   // Finishes when the next card is settled
          scrub: true,
        },
      });
      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => anim.scrollTrigger?.kill());
    };
  }, []);

  return (
    <section id="case-studies" className="bg-white py-24 lg:py-32">
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Header details */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col items-start">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full text-black/50"
              style={{ background: "#f3f3f3" }}
            >
              Featured Case Studies
            </span>
            <h2
              className="font-display font-medium text-black mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, letterSpacing: "-0.4px" }}
            >
              <SplitText
                text="Real-world impact through dedicated software engineering."
                type="words"
                triggerSelector="#case-studies"
              />
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-black/50 hover:text-black transition-colors group"
            >
              Browse All Cases
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Stacked Cards list */}
          <div className="lg:col-span-8 flex flex-col gap-8 relative w-full">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="case-study-card lg:sticky w-full"
                  style={{
                    top: `calc(100px + ${idx * 40}px)`,
                    paddingBottom: idx < projects.length - 1 ? `${(projects.length - 1 - idx) * 16}px` : "0px",
                  }}
                >
                  <div className="card-inner origin-bottom">
                    <Card3D
                      className="w-full shimmer-hover"
                      style={{ background: project.tint, borderRadius: 24, padding: 32 }}
                      intensity={4}
                    >
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.07)" }}>
                          <Icon size={18} className="text-black stroke-[1.5]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-medium text-black/40 tracking-widest uppercase block">{project.category}</span>
                          <h3 className="font-display font-medium text-black leading-tight mt-0.5" style={{ fontSize: 18 }}>{project.title}</h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div>
                          <span className="text-[10px] font-medium text-black/40 uppercase tracking-wider block mb-1.5">Challenge</span>
                          <p className="text-[13px] text-black/60 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-medium text-black/40 uppercase tracking-wider block mb-1.5">Solution</span>
                          <p className="text-[13px] text-black/60 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="p-4 mb-5" style={{ background: "rgba(0,0,0,0.05)", borderRadius: 16 }}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <TrendingUp size={13} className="text-black/50" />
                          <span className="text-[10px] font-bold text-black/50 uppercase tracking-widest">Results & Impact</span>
                        </div>
                        <p className="text-[13px] text-black leading-relaxed">{project.results}</p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/10 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className="sticker-pop text-[11px] font-medium text-black px-3 py-1 rounded-[9999px]" style={{ background: "rgba(0,0,0,0.08)" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link href="/projects" className="inline-flex items-center gap-1 text-[12px] font-medium text-black/50 hover:text-black transition-colors">
                          Case details <ArrowRight size={12} />
                        </Link>
                      </div>
                    </Card3D>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

