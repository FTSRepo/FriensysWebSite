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
        "relative overflow-hidden rounded-[14px] border border-border-subtle bg-bg-overlay p-6",
        "shadow-[0_1px_2px_rgba(27,23,20,0.05),0_4px_12px_-6px_rgba(27,23,20,0.08)]",
        "transition hover:-translate-y-0.5 hover:border-border-strong",
        className
      )}
    >
      {children}
    </Tag>
  );
}
