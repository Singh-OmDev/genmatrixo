import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "lime" | "mono" | "ghost";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-0.5 text-[10px] font-sans font-semibold tracking-[0.1em] uppercase rounded-pill border",
        {
          "bg-lime-spark border-lime-spark text-charcoal":
            variant === "default" || variant === "lime",
          "bg-ember-outline border-ember-outline text-paper":
            variant === "orange",
          "bg-transparent border-stone-border text-ink":
            variant === "mono" || variant === "ghost",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
