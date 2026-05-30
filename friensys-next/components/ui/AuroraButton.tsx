import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}
interface AsLink extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}
interface AsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

export type AuroraButtonProps = AsLink | AsButton;

export function AuroraButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...rest
}: AuroraButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[11px] font-medium",
    "transition-all duration-200 hover:-translate-y-px",
    "focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && "bg-accent-primary text-white hover:bg-[#083F39]",
    variant === "outline" && "border border-border-subtle bg-transparent text-text-primary hover:border-text-muted",
    (size === "sm" || size === "md") && "text-sm px-[18px] py-2.5",
    size === "lg" && "text-[15px] px-6 py-3.5",
    className
  );

  if (href !== undefined) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
