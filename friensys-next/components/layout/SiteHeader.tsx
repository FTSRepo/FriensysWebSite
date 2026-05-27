"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNav } from "@/lib/content";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = getNav();

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/brand/friensys-logo.png"
              alt="Friensys"
              width={28}
              height={28}
              priority
            />
            <span className="font-semibold text-text-primary tracking-tight">
              Friensys
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {nav.header.map((item) =>
              "items" in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors",
                      megaOpen
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 opacity-60 transition-transform duration-150",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {megaOpen && (
                    <MegaMenu
                      items={item.items ?? []}
                      onClose={() => setMegaOpen(false)}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={(item as { href: string }).href}
                  className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <AuroraButton href="/contact?intent=demo" size="sm" className="hidden md:inline-flex">
              Book Demo
            </AuroraButton>
            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        nav={nav}
      />
    </header>
  );
}
