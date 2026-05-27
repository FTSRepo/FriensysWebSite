import { getProducts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Products — Friensys School Management Suite",
  description:
    "Explore Friensys School ERP modules: fees, attendance, timetable, library, and more — all in one integrated platform.",
  path: "/products",
});

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ])}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
              Everything school management needs
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Eight purpose-built modules that work together — or independently. Pick exactly what
              your school needs today.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="Tell us about your school and we'll recommend the right modules for your needs."
        primaryLabel="Talk to our team"
        primaryHref="/contact?intent=demo"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
