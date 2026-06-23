"use client";

import { 
  Building, 
  Heart, 
  Utensils, 
  ShoppingCart, 
  Dumbbell, 
  Key, 
  Plane, 
  Scissors, 
  GraduationCap, 
  HeartHandshake, 
  Factory, 
  Briefcase 
} from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const industries = [
  { icon: Building, title: "Real Estate" },
  { icon: Heart, title: "Hospital" },
  { icon: Utensils, title: "Restaurant" },
  { icon: ShoppingCart, title: "E-commerce" },
  { icon: Dumbbell, title: "Fitness & Gym" },
  { icon: Key, title: "Hotel" },
  { icon: Plane, title: "Travel & Tourism" },
  { icon: Scissors, title: "Salon & Spa" },
  { icon: GraduationCap, title: "Education" },
  { icon: HeartHandshake, title: "NGO & Charity" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Briefcase, title: "Other" },
];

export function Process() {
  return (
    <section id="industries" className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Block */}
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
              Industries We Serve
            </span>
            <h2 className="text-pure-black font-display font-normal max-w-2xl mx-auto tracking-tight leading-tight">
              We build custom digital solutions to simplify operations and boost growth.
            </h2>
          </div>
        </FadeUp>

        {/* Industries Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.title}>
                <div
                  className="bg-paper border border-hairline p-6 flex flex-col justify-between h-[140px] shadow-none hover:border-stone-border transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <Icon size={20} className="text-graphite stroke-[1.5]" />
                  <h4 className="text-sm font-sans font-semibold text-pure-black tracking-[0.1em] uppercase">
                    {ind.title}
                  </h4>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
