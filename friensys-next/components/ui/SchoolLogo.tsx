import Image from "next/image";
import { cn } from "@/lib/utils";

interface SchoolLogoProps {
  src: string;
  name: string;
  className?: string;
}

export function SchoolLogo({ src, name, className }: SchoolLogoProps) {
  return (
    <div className={cn("flex items-center justify-center rounded-[var(--radius-md)] p-3 transition-colors hover:bg-bg-overlay", className)}>
      <Image
        src={src}
        alt={`${name} logo`}
        width={100}
        height={48}
        className="h-8 w-auto object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      />
    </div>
  );
}
