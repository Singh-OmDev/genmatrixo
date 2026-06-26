"use client";

import { Box, CreditCard, ShieldCheck, Activity, Cpu, Cloud } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Card3D } from "@/components/ui/Card3D";

const tints = ["#d4f7e6", "#e8e8fc", "#ffeecc", "#ffccf7", "#eddee9", "#f3f3f3"];

const saasPillars = [
  { icon: Box,        title: "MVP Development",          description: "Launch your application quickly with key product functionality engineered for speed-to-market validation." },
  { icon: ShieldCheck,title: "Multi-Tenant Architecture", description: "Ensure complete tenant data isolation, secure session structures, and high scalability standards." },
  { icon: CreditCard, title: "Subscription Billing",      description: "Implement complex billing cycles, subscription states, card vaults, and webhooks using Stripe APIs." },
  { icon: Activity,   title: "Admin Dashboards",          description: "Full-scale back-office systems with role-based access control, analytics pipelines, and tenant user management." },
  { icon: Cpu,        title: "API Development",           description: "Bespoke RESTful and GraphQL APIs engineered to integrate with outer systems with strict rate-limiting." },
  { icon: Cloud,      title: "Cloud Deployment",          description: "Infrastructure as code (IaC) deployment pipelines using AWS, Docker clusters, and automated CDN networks." },
];

export function SaaSShowcase() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full text-black/50"
              style={{ background: "#f3f3f3" }}
            >
              Tailored SaaS Engineering
            </span>
            <h2
              className="font-display font-medium text-black mx-auto mb-4"
              style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.22, letterSpacing: "-0.5px", maxWidth: 620 }}
            >
              Build Your SaaS Product
            </h2>
            <p className="text-black/50 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.6 }}>
              We specialize in engineering multi-tenant platforms from MVP launch to secure cloud scaling.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {saasPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <Card3D
                  className="h-full shimmer-hover"
                  style={{ background: tints[idx % tints.length], borderRadius: 24, padding: 32 }}
                  intensity={7}
                >
                  <div
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-5 shrink-0"
                    style={{ background: "rgba(0,0,0,0.07)" }}
                  >
                    <Icon size={18} className="text-black stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-medium text-black mb-3" style={{ fontSize: 17, lineHeight: 1.35 }}>
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-black/55 leading-relaxed" style={{ fontSize: 14 }}>
                    {pillar.description}
                  </p>
                </Card3D>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
