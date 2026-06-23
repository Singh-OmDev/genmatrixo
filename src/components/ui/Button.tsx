"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-orange" | "secondary-lime" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.1em] rounded-pill transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-bolt cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-lime-spark text-charcoal border border-lime-spark hover:bg-[#d5eb9b] hover:border-[#d5eb9b] font-medium shadow-none",
  secondary:
    "bg-transparent text-ink border-2 border-stone-border hover:border-graphite hover:text-pure-black",
  "secondary-orange":
    "bg-transparent text-ink border-2 border-ember-outline hover:bg-ember-outline hover:text-paper",
  "secondary-lime":
    "bg-transparent text-ink border-2 border-lime-bolt hover:bg-lime-bolt hover:text-charcoal",
  ghost:
    "bg-transparent text-ink hover:bg-hairline",
};

const sizes = {
  sm: "px-4 py-2 text-[12px] gap-1.5",
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-3.5 text-[16px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
