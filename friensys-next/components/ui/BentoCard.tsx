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
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-6 shadow-sm",
        "transition-all duration-300",
        glow && "hover:border-border-strong hover:shadow-md",
        className
      )}
    >
      {children}
    </Tag>
  );
}
