import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";
import { FadeUp } from "@/components/motion/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Capabilities | GenMatrixo",
  description:
    "Explore our software engineering, web application, SaaS scaling, UI/UX design, and IT consulting capabilities.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-background pt-36 pb-20 relative overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-3">
              <Link href="/" className="hover:text-text-main">Home</Link> / Services
            </div>
            <h1 className="text-text-main font-display font-bold text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-tight mb-6">
              Our Capabilities
            </h1>
            <p className="text-muted font-sans text-base max-w-2xl leading-relaxed">
              We engineer custom software systems, SaaS architectures, mobile applications, and high-performance web products with absolute technical rigor.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Interactive Details Area */}
      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ServicesClient />
        </div>
      </section>
    </>
  );
}
