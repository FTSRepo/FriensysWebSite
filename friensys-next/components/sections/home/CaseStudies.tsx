import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedCaseCard } from "@/components/marketing/FeaturedCaseCard";
import { getFeaturedCases } from "@/lib/content";

export function CaseStudies({ industry, title = "Work that runs in production" }: { industry?: string; title?: string }) {
  const studies = getFeaturedCases(industry);
  if (studies.length === 0) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading label="Case studies" title={title} align="left" />
          <Link href="/case-studies" className="shrink-0 text-sm font-semibold text-accent-primary hover:underline">
            All case studies →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((s) => (
            <FeaturedCaseCard key={s.slug} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
