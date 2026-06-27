"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsapInit";

interface SplitTextProps {
  text: string;
  type?: "words" | "chars";
  className?: string;
  triggerSelector?: string; // Optional scroll trigger element selector or ref
  delay?: number;
  duration?: number;
  stagger?: number;
}

/**
 * SplitText — splits text into words or characters and animate them into view using a clipping mask.
 * Avoids layout shift and hydration mismatches by pre-rendering elements during SSR.
 */
export function SplitText({
  text,
  type = "words",
  className,
  triggerSelector,
  delay = 0,
  duration = 0.65,
  stagger = 0.04,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(".split-item");
    if (targets.length === 0) return;

    // Set initial position out of view
    gsap.set(targets, { y: "105%", opacity: 0 });

    const triggerEl = triggerSelector 
      ? (document.querySelector(triggerSelector) || el) 
      : undefined;

    const anim = gsap.to(targets, {
      y: "0%",
      opacity: 1,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: triggerEl ? {
        trigger: triggerEl,
        start: "top 88%",
        toggleActions: "play none none none",
      } : undefined,
    });

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [triggerSelector, delay, duration, stagger]);

  if (type === "words") {
    const words = text.split(" ");
    return (
      <span ref={containerRef} className={className} style={{ display: "inline-block" }}>
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              marginRight: "0.22em",
            }}
          >
            <span className="split-item" style={{ display: "inline-block", willChange: "transform" }}>
              {word}
            </span>
          </span>
        ))}
      </span>
    );
  }

  // Chars mode
  const chars = text.split("");
  return (
    <span ref={containerRef} className={className} style={{ display: "inline-block" }}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
          }}
        >
          <span
            className="split-item"
            style={{
              display: "inline-block",
              willChange: "transform",
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}
