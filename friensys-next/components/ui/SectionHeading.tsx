import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ label, title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
