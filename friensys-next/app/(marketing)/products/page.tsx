import { getProducts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Products — Ready-to-Deploy Platforms",
  description:
    "Friensys products: School ERP, Education CRM, School App, College ERP, Customer Loyalty, Escalation System, Procurement Marketplace and OD-SAS. Start with proven software, then add AI where it pays off.",
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
              Our products
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Ready-to-deploy platforms used by real institutions and businesses. Start with proven
              software, then extend it with custom features and AI.
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
        subtitle="Tell us about your organisation and we'll recommend the right product — or build what's missing."
        primaryLabel="Talk to our team"
        primaryHref="/contact?intent=demo"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
