"use client";

import { 
  Code2, 
  Smartphone, 
  Sparkles, 
  Palette, 
  TrendingUp, 
  LineChart, 
  Brain, 
  Cpu, 
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const services = [
  {
    icon: Code2,
    title: "Web Design & development",
    description: "Custom websites and web apps built with modern, responsive design.",
  },
  {
    icon: Smartphone,
    title: "App Design & development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Sparkles,
    title: "UI & UX Design",
    description: "User-centric UI/UX design solutions that improve usability, accessibility, and overall engagement.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "We create creative visual designs that strengthen your brand identity and communicate effectively.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Targeted digital marketing solutions crafted to enhance brand visibility and transform audiences into returning customers.",
  },
  {
    icon: LineChart,
    title: "IT Consulting & Strategy",
    description: "Expert IT guidance to optimize your strategy, enhance operations, and drive business growth.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Artificial Intelligence & Automation Solutions to Optimize Processes and Drive Business.",
  },
  {
    icon: Cpu,
    title: "Custom Software Design",
    description: "Tailored Custom Software Design Solutions to Streamline Your Business and Enhance Efficiency.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Block */}
        <FadeUp>
          <div className="flex items-start justify-between mb-16 flex-wrap gap-4">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                Our Services
              </span>
              <h2 className="text-pure-black font-display font-normal tracking-tight max-w-xl">
                Expert services focused on innovation, reliability, and customer satisfaction.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-ink hover:text-pure-black tracking-[0.1em] uppercase self-end mb-1 transition-colors"
            >
              View details
              <ArrowRight size={14} className="text-graphite" />
            </Link>
          </div>
        </FadeUp>

        {/* Services 4x2 Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="group relative h-full bg-paper border border-hairline p-6 flex flex-col justify-between overflow-hidden cursor-pointer shadow-none hover:border-stone-border transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <div>
                    {/* 10px icon container */}
                    <div 
                      className="w-12 h-12 bg-canvas-inner border border-hairline flex items-center justify-center mb-6 text-charcoal" 
                      style={{ borderRadius: "10px" }}
                    >
                      <Icon size={20} className="stroke-[1.5]" />
                    </div>

                    <h3 className="text-xs font-sans font-bold text-pure-black mb-3 tracking-[0.05em] uppercase leading-snug min-h-[36px]">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-graphite tracking-[0.1em] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-[10px] font-sans font-semibold text-ink hover:text-pure-black tracking-[0.1em] uppercase transition-colors"
                    >
                      Learn more
                      <ArrowRight size={12} className="text-graphite" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
