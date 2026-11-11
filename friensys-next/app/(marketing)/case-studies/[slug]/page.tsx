import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { getFeaturedCases, getFeaturedCase, getProduct } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/shared/CTASection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getFeaturedCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getFeaturedCase(slug);
  if (!study) return {};
  return buildMetadata({
    title: `${study.client} — Case Study`,
    description: study.summary,
    path: `/case-studies/${slug}`,
  });
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-text-secondary">
            <Check className="mt-1 h-4 w-4 shrink-0 text-accent-lime" aria-hidden="true" />
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getFeaturedCase(slug);
  if (!study) notFound();
  const products = study.products
    .map((p) => getProduct(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case studies", url: "/case-studies" },
          { name: study.client, url: `/case-studies/${study.slug}` },
        ])}
      />

      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
            <Link href="/case-studies" className="hover:text-text-primary">
              Case studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">{study.client}</span>
          </nav>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-20 items-center justify-center rounded-md border border-border-subtle bg-white p-2">
              <Image
                src={study.logo}
                alt={`${study.client} logo`}
                width={72}
                height={48}
                style={{ width: "auto", height: "auto" }}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
            <div>
              <p className="font-semibold text-text-primary">{study.client}</p>
              <p className="text-sm text-text-muted">
                {study.industry} · {study.location}
              </p>
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">{study.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.services.map((s) => (
              <li key={s} className="rounded-full bg-accent-primary/10 px-3 py-1 text-sm font-medium text-accent-primary">
                {s}
              </li>
            ))}
          </ul>
          {study.stats && (
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border-subtle pt-8">
              {study.stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="text-sm text-text-secondary">{s.label}</dt>
                  <dd className="order-first text-3xl font-bold text-text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] space-y-16 px-4 py-20 sm:px-6 lg:px-8">
        <Block title="The challenge" items={study.challenge} />
        <Block title="What we built" items={study.solution} />
        <Block title="The outcome" items={study.outcomes} />

        {study.quote && (
          <figure className="rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-8 shadow-sm">
            <blockquote className="text-lg leading-relaxed text-text-primary">
              &ldquo;{study.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-text-secondary">
              — {study.quoteBy}
            </figcaption>
          </figure>
        )}

        {products.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-text-primary">Products used</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={p.slug === "school-erp" ? "/school-erp" : `/products/${p.slug}`}
                    className="block rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-5 transition-shadow hover:shadow-md"
                  >
                    <p className="font-semibold text-text-primary">{p.name}</p>
                    <p className="mt-1 text-sm text-text-secondary">{p.tagline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <CTASection />
    </>
  );
}
