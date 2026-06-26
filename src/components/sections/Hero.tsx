"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
];

const industries = [
  "Healthcare",
  "Fintech",
  "E-Commerce",
  "EdTech",
  "Real Estate",
  "SaaS",
];

// Repeat 8 times to ensure enough items to overflow the screen width for infinite scrolling
const repeatedTech = Array(8).fill(technologies).flat();
const repeatedIndustries = Array(8).fill(industries).flat();

/* Individual blob with mouse parallax */
function ParallaxBlob({
  style,
  depth = 0.05,
  className,
}: {
  style: React.CSSProperties;
  depth?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) * depth;
      const dy = (e.clientY - cy) * depth;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [depth]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "absolute",
        pointerEvents: "none",
        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        zIndex: 0,
        ...style,
      }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-28 pb-24">
      {/* ── Parallax confetti blobs ── */}
      <ParallaxBlob
        depth={0.04}
        style={{ top: -60, left: -60, width: 220, height: 220, borderRadius: "50%", background: "#3cdd8c", opacity: 0.92 }}
        className="float-blob"
      />
      <ParallaxBlob
        depth={0.06}
        style={{ top: 40, right: -40, width: 200, height: 200, borderRadius: 40, background: "#ffc435", opacity: 0.9 }}
        className="float-blob-delay"
      />
      <ParallaxBlob
        depth={0.03}
        style={{ top: "38%", left: -50, width: 100, height: 200, borderRadius: 9999, background: "#e699d9", opacity: 0.85 }}
        className="float-blob"
      />
      <ParallaxBlob
        depth={0.07}
        style={{ top: "42%", right: -30, width: 180, height: 180, borderRadius: 24, background: "#7575f0", opacity: 0.85 }}
        className="float-blob-delay2"
      />
      <ParallaxBlob
        depth={0.05}
        style={{ bottom: 80, left: 80, width: 60, height: 120, borderRadius: 9999, background: "#3cdd8c", opacity: 0.7 }}
        className="float-blob-delay"
      />
      <ParallaxBlob
        depth={0.08}
        style={{ bottom: 60, right: 100, width: 80, height: 80, borderRadius: "50%", background: "#ffc435", opacity: 0.75 }}
        className="float-blob"
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto w-full flex flex-col items-center text-center px-6"
        style={{ maxWidth: 1200 }}
      >
        {/* Eyebrow badge — sticker pop */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="sticker-pop shimmer-hover inline-flex items-center gap-2 px-4 py-1.5 rounded-[9999px] text-[13px] font-medium text-black mb-8 cursor-default"
          style={{
            background: "#e8e8fc",
            boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px",
          }}
        >
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#3cdd8c" }} />
          Enterprise Product Development Studio
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-black max-w-4xl mb-6"
          style={{
            fontSize: "clamp(44px, 6vw, 72px)",
            lineHeight: 1.1,
            letterSpacing: "clamp(-0.5px, -0.015em, -1.08px)",
          }}
        >
          Custom Software, Web Apps &{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3cdd8c 0%, #7575f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Digital Solutions
          </span>{" "}
          Built For Growth
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="text-black/55 font-sans text-[17px] max-w-[580px] mb-10 leading-relaxed"
        >
          We create websites, mobile applications, SaaS platforms, and custom software solutions that help businesses scale faster.
        </motion.p>

        {/* CTA row — magnetic buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <Magnetic strength={0.3}>
            <Link
              href="/contact"
              className="shimmer-hover inline-flex items-center gap-2 px-7 py-3 text-[16px] font-medium text-white rounded-[9999px] transition-all hover:bg-neutral-800 active:scale-[0.97]"
              style={{
                background: "#000",
                boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px",
              }}
            >
              Start Your Project
              <ArrowRight size={15} />
            </Link>
          </Magnetic>

          <Magnetic strength={0.3}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 text-[16px] font-medium text-black rounded-[9999px] border-2 border-black hover:bg-[#f3f3f3] active:scale-[0.97] transition-all"
              style={{
                boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px",
              }}
            >
              View Case Studies
            </Link>
          </Magnetic>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full mt-10 overflow-hidden"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] text-black/40 uppercase mb-8 select-none text-center">
            Our Tech Stack & Industry Expertise
          </p>

          <div className="flex flex-col gap-6 relative w-full overflow-hidden py-2">
            {/* Edge fades */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Row 1: Technologies (LTR) */}
            <div className="relative w-full overflow-hidden select-none">
              <div 
                className="flex gap-4 marquee-track-ltr w-max hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing"
                style={{ animationDuration: "35s" }}
              >
                {repeatedTech.map((tech, idx) => (
                  <div
                    key={`tech-${idx}`}
                    className="sticker-pop px-5 py-2.5 rounded-full border-2 border-black bg-white text-xs font-bold text-black shadow-sticker select-none hover:-translate-y-0.5 hover:shadow-[rgba(255,255,255,0.5)_0px_2px_2px_0px,_rgba(0,0,0,0.35)_0px_4px_4px_0px] transition-all flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3cdd8c]" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Industries (LTR) */}
            <div className="relative w-full overflow-hidden select-none">
              <div 
                className="flex gap-4 marquee-track-ltr w-max hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing"
                style={{ animationDuration: "40s" }}
              >
                {repeatedIndustries.map((ind, idx) => (
                  <div
                    key={`ind-${idx}`}
                    className="sticker-pop px-5 py-2.5 rounded-full border-2 border-black bg-white text-xs font-bold text-black shadow-sticker select-none hover:-translate-y-0.5 hover:shadow-[rgba(255,255,255,0.5)_0px_2px_2px_0px,_rgba(0,0,0,0.35)_0px_4px_4px_0px] transition-all flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7575f0]" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
