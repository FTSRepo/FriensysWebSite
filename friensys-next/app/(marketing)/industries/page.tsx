import { buildMetadata } from "@/lib/seo";
import { IndustriesGrid } from "@/components/sections/home/IndustriesGrid";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Software and AI for education, retail and e-commerce, healthcare, and finance, logistics and manufacturing businesses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ])}
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-bold text-text-primary sm:text-5xl">
            Industries we serve
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            Our leadership has delivered software across industries for 20+ years. These are the
            domains where we build today.
          </p>
        </div>
      </section>
      <IndustriesGrid />
      <CTASection />
    </>
  );
}
