import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";
import { FadeUp } from "@/components/motion/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights & Technical Blueprints | GenMatrixo",
  description:
    "Read modern software engineering posts, technical sitemaps, system design ideas, and optimizations directly from the GenMatrixo team.",
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-background pt-36 pb-20 relative overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-3">
              <Link href="/" className="hover:text-text-main">Home</Link> / Insights
            </div>
            <h1 className="text-text-main font-display font-bold text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-tight mb-6">
              Insights & Blueprints
            </h1>
            <p className="text-muted font-sans text-base max-w-2xl leading-relaxed">
              Technical articles, sitemaps, and system optimization write-ups compiled by our principal development division.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <BlogClient />
        </div>
      </section>
    </>
  );
}
