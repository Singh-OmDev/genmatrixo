"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number; // rotation degrees, default 8
}

/**
 * Card3D — mouse-tracking 3-D tilt card.
 * Wraps any content in a perspective container and tilts it
 * toward the cursor on hover, then springs back on leave.
 */
export function Card3D({
  children,
  className,
  style,
  intensity = 8,
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotX = -dy * intensity;
      const rotY = dx * intensity;

      setTransform(
        `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px) scale(1.015)`
      );

      // Glare position (percent)
      const gx = ((e.clientX - rect.left) / rect.width) * 100;
      const gy = ((e.clientY - rect.top) / rect.height) * 100;
      setGlare({ x: gx, y: gy, opacity: 0.15 });
    },
    [intensity]
  );

  const handleLeave = useCallback(() => {
    setTransform("");
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative", className)}
      style={{
        ...style,
        transform: transform || "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: transform
          ? "transform 0.05s linear"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
      {/* Glare overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 65%)`,
          transition: transform ? "opacity 0.05s" : "opacity 0.5s",
          zIndex: 1,
        }}
      />
    </div>
  );
}
