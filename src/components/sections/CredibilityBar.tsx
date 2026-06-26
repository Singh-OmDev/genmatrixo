"use client";

import { Users, CheckCircle, Calendar, Heart } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { Card3D } from "@/components/ui/Card3D";

const facts = [
  { icon: CheckCircle, label: "Projects Delivered", value: "50+", tint: "#d4f7e6" },
  { icon: Users,       label: "Businesses Served",  value: "20+", tint: "#ffccf7" },
  { icon: Calendar,    label: "Years Experience",    value: "4+",  tint: "#ffeecc" },
  { icon: Heart,       label: "Client Satisfaction", value: "95%", tint: "#e8e8fc" },
];

export function CredibilityBar() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <Card3D
                  key={fact.label}
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
                      className="font-display font-medium text-black leading-none mb-2 number-pop"
                      style={{ fontSize: 42, letterSpacing: "-0.03em" }}
                    >
                      {fact.value}
                    </div>
                    <div className="text-[12px] font-medium text-black/50 uppercase tracking-wider">
                      {fact.label}
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
