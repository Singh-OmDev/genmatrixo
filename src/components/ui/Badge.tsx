import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent" | "muted";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  /* All badges are pill-shaped (9999px) with pastel tint fills */
  const tints: Record<string, string> = {
    default: "#e8e8fc",
    primary: "#000000",
    secondary: "#e8e8fc",
    accent: "#d4f7e6",
    muted: "#f3f3f3",
  };

  const textColors: Record<string, string> = {
    default: "#000000",
    primary: "#ffffff",
    secondary: "#000000",
    accent: "#000000",
    muted: "#333333",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-0.5 text-[11px] font-medium tracking-wider rounded-[9999px] transition-colors duration-150",
        className
      )}
      style={{
        background: tints[variant] ?? "#f3f3f3",
        color: textColors[variant] ?? "#000",
      }}
    >
      {children}
    </span>
  );
}
