"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsapInit";

/**
 * Template — global Next.js page transition wrapper.
 * Dynamically fades and slides route contents up on load.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Reset initial state to prevent flash of content
    gsap.fromTo(
      el,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "all", // Clears transforms so it doesn't break sticky/absolute children layout
      }
    );
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
