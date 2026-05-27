import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "live" | "roadmap" | "dpdpa" | "iso" | "aws" | "new" | "default";

const variants: Record<BadgeVariant, string> = {
  live:    "border-accent-lime/25 bg-accent-lime/10 text-accent-lime",
  roadmap: "border-accent-amber/25 bg-accent-amber/10 text-accent-amber",
  dpdpa:   "border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan",
  iso:     "border-accent-primary/25 bg-accent-primary/10 text-accent-glow",
  aws:     "border-border-subtle bg-bg-overlay text-text-secondary",
  new:     "border-accent-primary/25 bg-accent-primary/10 text-accent-primary",
  default: "border-border-subtle bg-bg-overlay text-text-secondary",
};

export function Badge({ variant = "default", children, className }: { variant?: BadgeVariant; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
