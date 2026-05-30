import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/content";
import { PricingTiers } from "@/components/sections/pricing/PricingTiers";
import { CTASection } from "@/components/sections/shared/CTASection";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — School ERP",
  description:
    "Friensys School ERP pricing depends on student count and modules selected. We share a tailored quote within 48 hours. Modular — pay for what you need.",
  path: "/pricing",
});

export default function PricingPage() {
  const faqs = getFaqs("pricing");
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PricingTiers />
      <section className="py-16 bg-bg-elevated">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-8 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-text-primary">{q}</dt>
                <dd className="mt-2 text-sm text-text-secondary">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection
        title="Get your school's quote today."
        subtitle="30-minute call. We'll understand your school, then share a tailored proposal within 48 hours."
        primaryLabel="Book a pricing call"
        primaryHref="/contact?intent=pricing"
      />
    </>
  );
}
