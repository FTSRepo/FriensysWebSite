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
    "relative inline-flex items-center justify-center font-medium rounded-[var(--radius-md)]",
    "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && [
      "bg-accent-primary text-white",
      "hover:bg-accent-glow hover:shadow-[0_0_28px_-4px_hsl(252_100%_70%_/_0.55)]",
    ],
    variant === "outline" && [
      "border border-border-strong bg-transparent text-text-primary",
      "hover:border-accent-primary hover:text-accent-primary hover:shadow-[0_0_18px_-4px_hsl(252_100%_70%_/_0.3)]",
    ],
    size === "sm" && "px-3 py-1.5 text-sm",
    size === "md" && "px-5 py-2.5 text-base",
    size === "lg" && "px-7 py-3.5 text-lg",
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
