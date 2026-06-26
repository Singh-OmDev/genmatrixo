"use client";

import { useRef, useCallback } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // 0–1, how far it pulls. Default 0.35
}

/**
 * Magnetic — wraps children with a magnetic hover pull effect.
 * The element drifts toward the cursor and snaps back on leave.
 */
export function Magnetic({ children, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.transition = "transform 0.1s linear";
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: "inline-flex" }}
    >
      {children}
    </div>
  );
}
