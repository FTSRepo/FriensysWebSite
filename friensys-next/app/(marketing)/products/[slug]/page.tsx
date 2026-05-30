import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getProducts, getProduct } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { buildProductSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { DynIcon } from "@/components/ui/DynIcon";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CheckCircle2 } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} — Friensys`,
    description: product.summary,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: product.name,
          description: product.summary,
          url: `/products/${product.slug}`,
          image: product.hero,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.name, url: `/products/${product.slug}` },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] border border-border-subtle bg-bg-elevated text-accent-primary">
                <DynIcon name={product.icon} className="h-7 w-7" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-semibold text-text-primary md:text-5xl">
                {product.name}
              </h1>
              <p className="mb-2 text-lg font-medium text-accent-primary">{product.tagline}</p>
              <p className="mb-8 text-base text-text-secondary leading-relaxed">{product.summary}</p>
              <div className="flex flex-wrap gap-3">
                <AuroraButton href={product.primaryCta.href}>
                  {product.primaryCta.label}
                </AuroraButton>
                <AuroraButton href="/pricing" variant="outline">
                  View pricing
                </AuroraButton>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated">
              <Image
                src={product.hero}
                alt={`${product.name} screenshot`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold text-text-primary">Key capabilities</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-text-primary mb-4">
            See {product.name} in action
          </h2>
          <p className="text-text-secondary mb-8">
            Book a personalised demo — our team responds within 24 hours.
          </p>
          <AuroraButton href={product.primaryCta.href} size="lg">
            {product.primaryCta.label}
          </AuroraButton>
        </div>
      </section>
    </>
  );
}
