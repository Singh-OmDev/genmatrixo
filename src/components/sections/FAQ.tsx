"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";

const faqs = [
  {
    q: "How can we help your business?",
    a: [
      "Far beyond the usual challenges, in the world of digital innovation.",
      "Our expert IT solutions help businesses thrive.",
      "From the first steps of cloud integration to advanced AI deployment.",
      "Our team guides every project with precision.",
      "Connected yet customized, we ensure your business stays ahead in the digital landscape.",
    ],
  },
  {
    q: "How long does it take to build a professional website?",
    a: [
      "Typical website development takes 4–8 weeks.",
      "Timeline depends on the website’s complexity.",
      "Additional features may extend the schedule.",
      "Client feedback and revisions are included in the timeframe.",
      "Our team ensures timely delivery without compromising quality.",
    ],
  },
  {
    q: "How can you help my business with IT solutions?",
    a: [
      "We provide end-to-end IT consulting tailored to your business needs.",
      "Our team implements advanced software and digital solutions.",
      "We optimize processes to improve efficiency and productivity.",
      "We offer cloud integration, cybersecurity, and IT infrastructure support.",
      "Ongoing support ensures your technology continues to drive growth.",
    ],
  },
  {
    q: "What are the requirements for IT solutions?",
    a: [
      "We analyze your business goals and current IT infrastructure.",
      "Identify key areas where technology can improve efficiency.",
      "Determine software, hardware, and cloud solution requirements.",
      "Assess cybersecurity and compliance needs for your operations.",
      "Provide a customized IT strategy aligned with your objectives.",
    ],
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string[]; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-hairline/60 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-xs font-sans font-semibold text-pure-black tracking-[0.1em] uppercase">
          {q}
        </span>
        <span 
          className="shrink-0 w-6 h-6 rounded-full border border-stone-border bg-paper flex items-center justify-center text-charcoal group-hover:border-graphite transition-colors"
        >
          {open ? <Minus size={12} className="stroke-[1.5]" /> : <Plus size={12} className="stroke-[1.5]" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="pb-5 pl-4 list-disc space-y-1.5 font-sans text-xs text-graphite tracking-[0.1em] leading-relaxed max-w-2xl">
              {a.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <FadeUp>
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                Questions
              </span>
              <h2 className="text-pure-black font-display font-normal tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="font-sans text-xs text-graphite mt-3 leading-relaxed tracking-[0.1em]">
                Common queries regarding our development scope and terms.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-2">
            <div
              className="border border-hairline bg-[#f0eeeb]/60 px-6 shadow-none"
              style={{ borderRadius: "10px" }}
            >
              {faqs.map((f, i) => (
                <Item
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
