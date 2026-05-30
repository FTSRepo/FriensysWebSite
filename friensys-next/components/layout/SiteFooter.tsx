import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getNav } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

export function SiteFooter() {
  const nav = getNav();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-elevated">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand row */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Brand block */}
          <div className="flex-shrink-0 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Image
                src="/brand/friensys-logo.png"
                alt="Friensys"
                width={28}
                height={28}
              />
              <span className="font-display text-xl font-semibold text-text-primary">Friensys</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {site.tagline}
            </p>
            <p className="text-xs text-text-muted leading-relaxed mb-5">
              Friensys is a school ERP platform serving 300+ schools across
              India, built by Friensys Info Labs, Greater Noida, since 2017.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="dpdpa">DPDPA aligned</Badge>
              <Badge variant="iso">ISO 27001 in progress</Badge>
              <Badge variant="aws">AWS Mumbai</Badge>
            </div>
          </div>

          {/* Nav columns grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 flex-1">
            {(
              Object.entries(nav.footer) as [
                string,
                Array<{ label: string; href: string }>
              ][]
            ).map(([section, items]) => (
              <div key={section}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-text-muted">
                  {section}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect column */}
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-text-muted">
                Connect
              </h3>
              <ul className="space-y-2 text-sm">
                {site.social.linkedin && (
                  <li>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li className="text-xs text-text-muted leading-snug">
                  {site.address.locality}, {site.address.region}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-xs text-text-muted">
            © {year} Friensys Info Labs. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link
              href="/legal/privacy-policy"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/legal/cancellation-policy"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
