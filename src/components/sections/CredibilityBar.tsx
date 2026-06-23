"use client";

import { Users, CheckCircle, Calendar } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";

const facts = [
  {
    icon: Users,
    label: "Happy Clients",
    value: "150+",
  },
  {
    icon: CheckCircle,
    label: "Projects Done",
    value: "200+",
  },
  {
    icon: Calendar,
    label: "Years of Experience",
    value: "4+",
  },
];

export function CredibilityBar() {
  return (
    <section className="bg-canvas border-b border-hairline py-12">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="bg-paper border border-hairline p-6 flex items-center gap-5 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  {/* 10px icon container */}
                  <div 
                    className="w-12 h-12 bg-canvas-inner border border-hairline flex items-center justify-center text-charcoal shrink-0" 
                    style={{ borderRadius: "10px" }}
                  >
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-semibold text-graphite uppercase tracking-[0.1em] mb-1">
                      {fact.label}
                    </div>
                    <div className="text-2xl font-display font-normal text-pure-black leading-none tracking-tight">
                      {fact.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
