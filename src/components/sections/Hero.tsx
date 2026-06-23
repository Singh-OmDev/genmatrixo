"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section 
      className="relative min-h-[80vh] pt-36 pb-20 flex items-center bg-canvas overflow-hidden"
      style={{ backgroundImage: "var(--gradient-sky-wash)" }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 text-center flex flex-col items-center">

        {/* Display H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-pure-black font-display font-normal leading-[1.05] tracking-tight max-w-3xl mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, var(--text-display-lg))" }}
        >
          Modern & Impactful Digital Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-graphite font-sans text-sm tracking-[0.1em] leading-relaxed max-w-2xl mb-12"
        >
          Powerful Digital Solutions for Business
        </motion.p>

        {/* Dual Actions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-sans font-semibold bg-lime-spark text-charcoal border border-lime-spark rounded-pill hover:bg-[#d5eb9b] hover:border-[#d5eb9b] tracking-[0.1em] transition-all uppercase"
          >
            Free Quote
            <ArrowRight size={13} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-sans font-semibold bg-paper text-ink border border-stone-border rounded-pill hover:border-graphite tracking-[0.1em] transition-all uppercase"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
