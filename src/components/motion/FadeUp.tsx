"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

/* Raycast motion philosophy: 0.2s entrances, ease-out */
export function FadeUp({ children, delay = 0, className, once = true }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.3, delay, ease: [0.0, 0.0, 0.2, 1.0] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
