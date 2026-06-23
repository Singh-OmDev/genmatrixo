"use client";

import { Check, PhoneCall } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import Link from "next/link";

const bullets = [
  "Trusted",
  "Experienced Team",
  "24/7 Customer Support",
  "Best Value for Your Investment",
];

export function AboutUsSection() {
  return (
    <section className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <FadeUp>
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                About Us
              </span>
              <h2 className="text-pure-black font-display font-normal mt-3 mb-6 tracking-tight">
                Trusted IT Service Provider With 4 Years of Experience
              </h2>
              <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed mb-8">
                We provide reliable and high-quality IT services focused on delivering real results. Our team works with dedication and attention to detail, ensuring every project runs smoothly from start to finish. With a commitment to excellence, we offer customized solutions designed to meet your business goals. Your success is our priority, and we strive to deliver value, innovation, and long-term support.
              </p>

              {/* Bullet points grid */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {bullets.map((bullet) => (
                  <StaggerItem key={bullet}>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-lime-spark flex items-center justify-center text-charcoal shrink-0 border border-hairline">
                        <Check size={11} className="stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-sans font-medium text-ink tracking-[0.1em] uppercase">
                        {bullet}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Call-out section & Request quote button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div 
                  className="flex items-center gap-4 bg-paper border border-hairline px-5 py-3.5 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="w-8 h-8 rounded-full bg-canvas-inner border border-hairline flex items-center justify-center text-charcoal">
                    <PhoneCall size={14} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans font-semibold text-graphite uppercase tracking-[0.1em] mb-0.5">
                      Call to ask any question
                    </div>
                    <div className="text-sm font-display font-semibold text-pure-black tracking-tight leading-none">
                      +91 88245 84530
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 text-xs font-sans font-semibold bg-lime-spark text-charcoal border border-lime-spark rounded-pill hover:bg-[#d5eb9b] hover:border-[#d5eb9b] tracking-[0.1em] transition-all uppercase"
                >
                  Request A Quote
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Visual Layout / Placeholder matching the design theme */}
          <FadeUp delay={0.15}>
            <div 
              className="border border-hairline bg-paper p-8 flex flex-col justify-between h-[360px] relative overflow-hidden shadow-none"
              style={{ borderRadius: "10px" }}
            >
              <div className="absolute top-0 right-0 w-24 h-1.5 bg-lime-bolt" />
              <div>
                <span className="text-[10px] font-mono uppercase text-lime-bolt tracking-[0.1em] font-semibold block mb-2">
                  IT Engineering Strategy
                </span>
                <h3 className="text-2xl font-display font-normal text-pure-black tracking-tight leading-snug mb-4">
                  Value, innovation, and long-term support.
                </h3>
                <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed">
                  Every solution we deliver integrates clean-slate architecture and rigorous standards.
                </p>
              </div>

              <div className="border-t border-hairline pt-5 flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold text-graphite uppercase tracking-[0.1em]">
                  GenMatrixo V2 Runtimes
                </span>
                <span className="text-xs font-sans font-semibold text-lime-bolt tracking-[0.1em] uppercase">
                  ● Status: Live
                </span>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
