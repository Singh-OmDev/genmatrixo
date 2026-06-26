"use client";

import { Cpu, ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Card3D } from "@/components/ui/Card3D";
import Link from "next/link";

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
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="flex items-start justify-between mb-16 flex-wrap gap-6">
            <div>
              <span
                className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full text-black/50"
                style={{ background: "#f3f3f3" }}
              >
                Featured Case Studies
              </span>
              <h2
                className="font-display font-medium text-black max-w-xl"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.22, letterSpacing: "-0.4px" }}
              >
                Real-world impact through dedicated software engineering.
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-black/50 hover:text-black transition-colors self-end mb-1 group">
              Browse All Cases
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.title}>
                <Card3D
                  className="h-full shimmer-hover"
                  style={{ background: project.tint, borderRadius: 24, padding: 32 }}
                  intensity={5}
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
