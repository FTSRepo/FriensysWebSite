import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { DynIcon } from "@/components/ui/DynIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { getProduct, type DetailPage as DetailPageData } from "@/lib/content";

interface DetailPageProps {
  page: DetailPageData;
  section: { label: string; href: string };
}

export function DetailPage({ page, section }: DetailPageProps) {
  const products = page.relatedProducts
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const path = `${section.href}/${page.slug}`;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: section.label, url: section.href },
          { name: page.name, url: path },
        ])}
      />
      <FAQSchema faqs={page.faqs} />

      {/* Hero */}
      <section className="border-b border-border-subtle py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
            <Link href={section.href} className="hover:text-text-primary">
              {section.label}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">{page.name}</span>
          </nav>
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-accent-primary/10 text-accent-primary">
            <DynIcon name={page.icon} className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            {page.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {page.hero.promise}
          </p>
          {page.proof && (
            <p className="mt-6 max-w-2xl border-l-2 border-accent-cyan pl-4 text-sm font-medium text-text-primary">
              {page.proof}
            </p>
          )}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <AuroraButton href={`/contact?intent=${page.slug}`} size="lg">
              Book a free consultation
            </AuroraButton>
            <AuroraButton href="#deliverables" variant="outline" size="lg">
              What we deliver
            </AuroraButton>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Sound familiar?" title="Problems we solve" align="left" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.problems.map((p) => (
              <li
                key={p}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-5 text-text-primary shadow-sm"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="scroll-mt-24 border-y border-border-subtle bg-bg-elevated py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What we deliver" title={`${page.name}, done properly`} align="left" />
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map((d) => (
              <div key={d.title} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-accent-lime" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-text-primary">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{d.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-sm font-semibold uppercase tracking-widest text-text-muted">
            Technology we use
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border-subtle bg-bg-base px-3 py-1 text-sm text-text-secondary"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowWeWork />

      {/* Related products */}
      {products.length > 0 && (
        <section className="border-t border-border-subtle bg-bg-elevated py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Proven foundations"
              title="Start from software that already runs"
              subtitle="Our own products, ready to deploy and extend."
              align="left"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={p.slug === "school-erp" ? "/school-erp" : `/products/${p.slug}`}
                  className="group overflow-hidden rounded-[var(--radius-xl)] border border-border-subtle bg-bg-base transition-shadow hover:shadow-md"
                >
                  <div className="relative h-40 w-full overflow-hidden border-b border-border-subtle">
                    <Image
                      src={p.hero}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-text-primary">{p.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{p.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-primary">
                      View product <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FAQ" title="Questions we hear often" align="left" />
          <Accordion type="multiple" className="mt-8 space-y-2">
            {page.faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-text-secondary">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}
