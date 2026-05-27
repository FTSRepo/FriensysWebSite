import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/content";
import { ErpHero } from "@/components/sections/school-erp/ErpHero";
import { FeesSpotlight } from "@/components/sections/school-erp/FeesSpotlight";
import { ModuleAccordion } from "@/components/sections/school-erp/ModuleAccordion";
import { CTASection } from "@/components/sections/shared/CTASection";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = buildMetadata({
  title: "School ERP — Admissions to Graduation",
  description:
    "Friensys School ERP: 40+ modules, 300+ schools. Fees, attendance, report cards, parent app, transport, HR. CBSE, ICSE, State Board. DPDPA-aligned.",
  path: "/school-erp",
});

export default function SchoolErpPage() {
  const faqs = getFaqs("home");
  return (
    <>
      <ProductSchema
        name="Friensys School ERP"
        description="End-to-end school management software — admissions, fees, attendance, exams, report cards, parent comms. 40+ modules, 300+ schools live."
        url="/school-erp"
        image="/screenshots/school-erp.png"
      />
      <FAQSchema faqs={faqs} />
      <ErpHero />
      <FeesSpotlight />
      <ModuleAccordion />
      <CTASection
        title="Ready to see it with your school's data?"
        subtitle="We'll set up a guided demo using a school profile similar to yours — CBSE, ICSE, or State Board."
        primaryHref="/contact?intent=school-erp"
      />
    </>
  );
}
