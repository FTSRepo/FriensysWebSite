import { buildMetadata } from "@/lib/seo";
import { legal } from "@/.velite";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Legal — Policies & Terms",
  description: "Friensys terms of service, privacy policy, refund policy, DPDPA compliance, and other legal documents.",
  path: "/legal",
  noIndex: true,
});

const order = [
  "terms-of-service",
  "privacy-policy",
  "refund-policy",
  "dpdpa-compliance",
  "cookie-policy",
  "acceptable-use",
];

export default function LegalIndexPage() {
  const sorted = [...legal].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
  );

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 font-display text-3xl font-semibold text-text-primary">Legal</h1>
        <p className="mb-10 text-text-secondary">
          Policies, terms, and compliance documents for Friensys customers and visitors.
        </p>
        <ul className="space-y-3">
          {sorted.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`/legal/${doc.slug}`}
                className="flex items-center justify-between rounded-[var(--radius-md)] border border-border-subtle bg-bg-elevated px-5 py-4 transition-colors hover:border-accent-primary/40 hover:bg-bg-overlay"
              >
                <div>
                  <p className="font-medium text-text-primary">{doc.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{doc.description}</p>
                </div>
                <ChevronRight className="ml-4 h-4 w-4 shrink-0 text-text-muted" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
