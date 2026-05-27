"use client";
import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { getNav } from "@/lib/content";
import { AuroraButton } from "@/components/ui/AuroraButton";

type NavData = ReturnType<typeof getNav>;

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  nav: NavData;
}

export function MobileNav({ open, onClose, nav }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="fixed inset-y-0 right-0 z-50 flex w-[min(320px,100vw)] flex-col bg-bg-elevated border-l border-border-subtle"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
          <span className="text-sm font-medium text-text-primary">Menu</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-overlay"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.header.map((item) =>
            "items" in item && item.items ? (
              <div key={item.label}>
                <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  {item.label}
                </p>
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onClose}
                    className="block px-3 py-2 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-bg-overlay transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={(item as { href: string }).href}
                onClick={onClose}
                className="block px-3 py-2 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-bg-overlay transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="p-4 border-t border-border-subtle">
          <AuroraButton href="/contact?intent=demo" className="w-full justify-center">
            Book Demo
          </AuroraButton>
        </div>
      </nav>
    </>
  );
}
