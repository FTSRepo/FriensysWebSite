import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "live" | "roadmap" | "dpdpa" | "iso" | "aws" | "new" | "default";

const variants: Record<BadgeVariant, string> = {
  live:    "bg-success/15 text-success",
  roadmap: "bg-accent-amber/15 text-accent-amber",
  dpdpa:   "bg-bg-elevated text-text-secondary border border-border-subtle",
  iso:     "bg-bg-elevated text-text-secondary border border-border-subtle",
  aws:     "bg-bg-elevated text-text-secondary border border-border-subtle",
  new:     "bg-accent-amber/15 text-accent-amber",
  default: "bg-bg-elevated text-text-secondary border border-border-subtle",
};

export function Badge({ variant = "default", children, className }: { variant?: BadgeVariant; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold", variants[variant], className)}>
      {children}
    </span>
  );
}
