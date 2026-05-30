"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiveCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function LiveCounter({ value, suffix = "+", label, className }: LiveCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-1.5", className)}>
      <span className="font-display tabular-nums text-4xl font-semibold text-text-primary md:text-5xl">
        {count.toLocaleString()}<span className="text-accent-primary">{suffix}</span>
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-text-muted">
        {label}
      </span>
    </div>
  );
}
