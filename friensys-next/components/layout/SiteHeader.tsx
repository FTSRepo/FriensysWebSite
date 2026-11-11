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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = getNav();

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-base/90 backdrop-blur-md border-b border-border-subtle">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/brand/friensys-logo.png"
              alt="Friensys"
              width={28}
              height={28}
              style={{ width: 28, height: 28 }}
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
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      openMenu === item.label
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 opacity-60 transition-transform duration-150",
                        openMenu === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openMenu === item.label && (
                    <MegaMenu
                      items={item.items ?? []}
                      onClose={() => setOpenMenu(null)}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={(item as { href: string }).href}
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <AuroraButton href="/contact?intent=consultation" size="sm" className="hidden md:inline-flex">
              Book a free consultation
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
