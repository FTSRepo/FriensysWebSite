import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FeaturedCase } from "@/lib/content";

export function FeaturedCaseCard({ study }: { study: FeaturedCase }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-7 shadow-sm transition-all hover:border-border-strong hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-white p-1.5">
          <Image
            src={study.logo}
            alt={`${study.client} logo`}
            width={56}
            height={40}
            style={{ width: "auto", height: "auto" }}
            className="max-h-9 max-w-full object-contain"
          />
        </div>
        <div>
          <p className="font-semibold text-text-primary">{study.client}</p>
          <p className="text-xs text-text-muted">
            {study.industry} · {study.location}
          </p>
        </div>
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-snug text-text-primary">{study.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{study.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {study.services.map((s) => (
          <li key={s} className="rounded-full bg-bg-overlay px-3 py-1 text-xs font-medium text-text-secondary">
            {s}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-primary">
        Read the case study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
