import Image from "next/image";
import type { ReactNode } from "react";

interface ProductFrameProps {
  src?: string;
  alt?: string;
  aspect?: string;
  children?: ReactNode;
  className?: string;
}

export function ProductFrame({ src, alt, aspect, children, className = "" }: ProductFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-border-subtle bg-bg-overlay shadow-[0_8px_20px_-10px_rgba(27,23,20,0.12),0_32px_60px_-28px_rgba(27,23,20,0.28)] ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-elevated px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5897D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E8C36B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#9BC58A]" />
        <span className="ml-3 font-mono text-[11px] text-text-muted">app.friensys.com</span>
      </div>

      {/* Body */}
      {src ? (
        <div className={`relative w-full ${aspect ?? "aspect-[16/10]"}`}>
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes="(max-width:768px) 100vw, 720px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        children
      )}
    </div>
  );
}
