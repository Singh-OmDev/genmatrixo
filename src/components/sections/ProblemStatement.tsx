"use client";

import { Award, DollarSign, Shield, PhoneCall } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const features = [
  {
    icon: Award,
    title: "Best In Industry",
    desc: "We provide trusted and professional solutions backed by proven industry experience, premium-quality standards.",
  },
  {
    icon: DollarSign,
    title: "Best Value for Your Investment",
    desc: "Emphasizes transparent and reliable pricing, ensuring customers receive clear, straightforward cost details with no hidden fees.",
  },
  {
    icon: Shield,
    title: "Professional & Experienced Team",
    desc: "Our team of skilled professionals delivers exceptional service with expertise, dedication, and reliability, ensuring the best results for every client.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available around the clock to assist you with any queries, ensuring prompt and reliable service anytime, anywhere.",
  },
];

export function ProblemStatement() {
  return (
    <section className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Block */}
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
              Why Choose Us
            </span>
            <h2 className="text-pure-black font-display font-normal max-w-2xl mx-auto tracking-tight leading-tight">
              We Are Committed to Accelerating Your Business Growth Exponentially
            </h2>
          </div>
        </FadeUp>

        {/* Feature Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <StaggerItem key={feat.title}>
                <div
                  className="h-full bg-paper border border-hairline p-6 flex flex-col justify-between shadow-none hover:border-stone-border transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <div>
                    {/* 10px rounded icon container */}
                    <div 
                      className="w-12 h-12 bg-canvas-inner border border-hairline flex items-center justify-center mb-6 text-charcoal" 
                      style={{ borderRadius: "10px" }}
                    >
                      <Icon size={20} className="stroke-[1.5]" />
                    </div>
                    <h3 className="text-xs font-sans font-bold text-pure-black tracking-[0.05em] uppercase mb-3 min-h-[36px] leading-snug">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-xs text-graphite tracking-[0.1em] leading-relaxed">
                      {feat.desc}
                    </p>
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
