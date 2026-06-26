"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";

const faqs = [
  { q: "What types of services does GenMatrixo offer?",              a: "We engineer premium digital products across web development (Next.js runtimes), native/cross-platform mobile apps, multi-tenant SaaS platforms, custom databases, UI/UX designs, and strategic technology consulting." },
  { q: "How long does a typical software development lifecycle take?", a: "Timelines depend entirely on project scope. A standard Web MVP or custom SaaS portal takes between 6 to 12 weeks, which includes discovery, UI design, backend configuration, testing, and cloud deployment." },
  { q: "Do you offer post-launch support and SLA updates?",          a: "Yes, we provide ongoing, SLA-backed maintenance and scaling support. This covers version upgrades, security patches, cloud cost optimization, database maintenance, and continuous feature releases." },
  { q: "What is your typical project delivery and payment workflow?", a: "We work on structured milestone schedules. Every phase—from UI approval to API verification—requires stakeholder sign-off. Payments are typically split across milestone achievements (e.g. Kickoff, Prototype, Beta, Deploy)." },
  { q: "Do you work with startups or enterprise clients?",           a: "Both. We've built MVPs for early-stage startups and architected large-scale systems for enterprise clients. Our process adapts to your stage, budget, and technical complexity." },
  { q: "What technologies do you primarily work with?",             a: "Our core stack is Next.js, React, Node.js, NestJS, PostgreSQL, MongoDB, Redis, and AWS/Docker for infrastructure. We adapt to your existing stack where needed." },
];

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="mb-3 last:mb-0 shimmer-hover"
      style={{ background: "#ffffff", borderRadius: 16, transition: "transform 0.2s cubic-bezier(0.23,1,0.32,1)", }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px) scale(1.005)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)")}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none"
        aria-expanded={open}
      >
        <span className="font-display font-medium text-black" style={{ fontSize: 15, lineHeight: 1.45 }}>
          {q}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-black transition-all"
          style={{ background: "#f3f3f3", transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
        >
          <Plus size={14} strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-black/55 leading-relaxed" style={{ fontSize: 14, lineHeight: 1.65 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "#7575f0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: BLACK text on violet (fastht.ml) */}
          <FadeUp className="lg:col-span-4">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.28)", color: "#000" }}
            >
              FAQ
            </span>
            <h2
              className="font-display font-medium mb-5"
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                lineHeight: 1.18,
                letterSpacing: "-0.5px",
                color: "#000000",   /* black on violet */
              }}
            >
              Questions?{" "}
              <span style={{ display: "block" }}>Answers.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#000", opacity: 0.65, maxWidth: 300 }}>
              Common queries regarding our development lifecycle, methodologies, and engineering agreements.
            </p>
          </FadeUp>

          {/* Right: animated accordion stack */}
          <FadeUp delay={0.1} className="lg:col-span-8">
            <div>
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
