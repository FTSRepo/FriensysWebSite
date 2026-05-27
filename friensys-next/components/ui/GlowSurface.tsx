import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlowColor = "violet" | "cyan" | "lime";

const glowClasses: Record<GlowColor, string> = {
  violet: "hover:border-accent-primary/30 hover:shadow-[0_0_60px_-20px_hsl(252_100%_70%_/_0.3)]",
  cyan:   "hover:border-accent-cyan/30 hover:shadow-[0_0_60px_-20px_hsl(197_100%_64%_/_0.3)]",
  lime:   "hover:border-accent-lime/30 hover:shadow-[0_0_60px_-20px_hsl(84_100%_67%_/_0.3)]",
};

export function GlowSurface({ children, className, color = "violet" }: { children: ReactNode; className?: string; color?: GlowColor }) {
  return (
    <div className={cn("rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated transition-all duration-300", glowClasses[color], className)}>
      {children}
    </div>
  );
}
