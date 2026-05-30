import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-accent-primary ${className}`}>
      <span className="h-px w-8 bg-accent-amber" />
      {children}
    </span>
  );
}
