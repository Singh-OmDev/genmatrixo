"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

/* Base: pill shape, no color */
const baseStyles =
  "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-[9999px] transition-all duration-200 cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white";

const variants = {
  /* Black filled pill — primary action is always black */
  primary:
    "bg-black text-white hover:bg-neutral-800 active:scale-[0.98]" +
    " shadow-[rgba(255,255,255,0.5)_0px_2px_2px_0px,rgba(0,0,0,0.2)_0px_3px_3px_0px]",
  /* White outlined pill — secondary / ghost action */
  secondary:
    "bg-white text-black border border-black/20 hover:border-black/60 active:scale-[0.98]" +
    " shadow-[rgba(255,255,255,0.5)_0px_2px_2px_0px,rgba(0,0,0,0.2)_0px_3px_3px_0px]",
  outline:
    "bg-white text-black border border-black hover:bg-[#f3f3f3] active:scale-[0.98]" +
    " shadow-[rgba(255,255,255,0.5)_0px_2px_2px_0px,rgba(0,0,0,0.2)_0px_3px_3px_0px]",
  ghost:
    "bg-transparent text-black/70 hover:text-black hover:bg-black/5",
};

const sizes = {
  sm: "px-4 py-2 text-[13px] gap-1.5",
  md: "px-6 py-2 text-sm",
  lg: "px-7 py-2.5 text-[16px]",
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
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
