import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function BrowserFrame({ src, alt, width = 1200, height = 800, className }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated shadow-[0_0_80px_-20px_hsl(252_100%_70%_/_0.2)]", className)}>
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-bg-overlay px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/50" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/50" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-lime/50" aria-hidden="true" />
        <div className="ml-4 max-w-52 flex-1 rounded bg-bg-base/80 px-3 py-0.5 text-xs text-text-muted">
          app.friensys.com
        </div>
      </div>
      <Image src={src} alt={alt} width={width} height={height} className="w-full object-cover object-top" />
    </div>
  );
}
