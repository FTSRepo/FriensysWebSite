import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlowColor = "violet" | "cyan" | "lime";

const hoverBorder: Record<GlowColor, string> = {
  violet: "hover:border-accent-primary/40",
  cyan: "hover:border-accent-cyan/40",
  lime: "hover:border-accent-lime/40",
};

export function GlowSurface({ children, className, color = "violet" }: { children: ReactNode; className?: string; color?: GlowColor }) {
  return (
    <div className={cn("rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated shadow-sm transition-all duration-300 hover:shadow-md", hoverBorder[color], className)}>
      {children}
    </div>
  );
}
