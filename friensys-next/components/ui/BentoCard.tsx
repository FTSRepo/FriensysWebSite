import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  glow?: boolean;
}

export function BentoCard({ children, className, as: Tag = "div", glow = false }: BentoCardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-6",
        "transition-all duration-300",
        glow && ["hover:border-accent-primary/30", "hover:shadow-[0_0_60px_-20px_hsl(252_100%_70%_/_0.25)]"],
        className
      )}
    >
      {children}
    </Tag>
  );
}
