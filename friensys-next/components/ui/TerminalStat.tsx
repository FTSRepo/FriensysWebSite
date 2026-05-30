import { cn } from "@/lib/utils";

interface TerminalStatProps {
  value: string;
  label?: string;
  className?: string;
}

export function TerminalStat({ value, label, className }: TerminalStatProps) {
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className="select-none font-mono text-xs text-text-muted opacity-70" aria-hidden="true">
        &gt;
      </span>
      <span className="font-mono font-semibold text-text-primary">{value}</span>
      {label && <span className="font-mono text-xs text-text-muted">{label}</span>}
    </div>
  );
}
