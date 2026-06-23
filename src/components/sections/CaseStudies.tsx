"use client";

import { Cpu, Cloud, ShieldCheck } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const posts = [
  {
    icon: Cpu,
    category: "Artificial Intelligence",
    title: "Artificial Intelligence / Generative AI",
    desc: "IT services are no longer just about infrastructure or apps—they are about intelligent systems that can adapt, predict and collaborate.",
  },
  {
    icon: Cloud,
    category: "Hybrid Infrastructure",
    title: "Cloud, Edge Computing & Hybrid Infrastructure",
    desc: "Many clients demand faster latency, local processing (edge) and flexible infrastructure. IT service providers must handle multiple.",
  },
  {
    icon: ShieldCheck,
    category: "Cybersecurity",
    title: "Cybersecurity, Trust & Post-Quantum Readiness",
    desc: "Develop offerings around compliance, data governance, and future-proof security (especially important in sectors like automotive).",
  },
];

export function CaseStudies() {
  return (
    <section id="latest-technology" className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Block */}
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
              Latest Technology
            </span>
            <h2 className="text-pure-black font-display font-normal max-w-2xl mx-auto tracking-tight leading-tight">
              Explore Our Latest Tech Insights, Trends, and Expert Articles
            </h2>
          </div>
        </FadeUp>

        {/* Blog Posts Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <StaggerItem key={post.title}>
                <div
                  className="h-full bg-paper border border-hairline p-6 flex flex-col justify-between shadow-none hover:border-stone-border transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <div>
                    {/* Category tag */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-2.5 py-0.5 text-[9px] font-sans font-semibold rounded-pill border border-hairline bg-canvas-inner text-graphite tracking-[0.1em]">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-sans font-semibold text-pure-black tracking-[0.1em] uppercase mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-sans text-xs text-graphite tracking-[0.1em] leading-relaxed mb-6">
                      {post.desc}
                    </p>
                  </div>

                  <div>
                    <span 
                      className="w-9 h-9 bg-canvas-inner border border-hairline flex items-center justify-center text-charcoal" 
                      style={{ borderRadius: "10px" }}
                    >
                      <Icon size={16} className="stroke-[1.5]" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
