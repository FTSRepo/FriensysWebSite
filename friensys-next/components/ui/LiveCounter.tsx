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
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <span className="tabular-nums text-4xl font-bold text-text-primary sm:text-5xl">
        {count}<span className="text-accent-primary">{suffix}</span>
      </span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}
