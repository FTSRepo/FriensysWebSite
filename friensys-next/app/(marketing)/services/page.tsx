import { buildMetadata } from "@/lib/seo";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { CTASection } from "@/components/sections/shared/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Services — AI, Custom Software, Modernisation & Consulting",
  description:
    "AI & ML solutions, custom software and MVPs, modernisation and support, and technology consulting for startups, SMEs and mid-size businesses.",
  path: "/services",
});

/* Services for customers of our own products (previously the whole of /services). */
const productServices = [
  { title: "Implementation", body: "A dedicated engineer owns onboarding: configuration, parallel run and go-live in 4–8 weeks." },
  { title: "Data migration", body: "From Excel, Tally or any previous system — we transform, validate and import." },
  { title: "Training", body: "Role-based training on-site or remote, with recordings for staff who join later." },
  { title: "Customisation", body: "Custom reports, workflows and integrations that fit cleanly with the core platform." },
  { title: "AMC", body: "Updates, security patches, backups and an annual health check, every year." },
  { title: "Ongoing support", body: "Ticket, WhatsApp and phone support, with a 4-hour response for critical issues." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Build, modernise and add AI — with one accountable partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            From a startup&apos;s first MVP to the systems a mid-size business runs on, our team
            designs, builds and supports software end to end — led by engineers with 20+ years of
            enterprise delivery.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <HowWeWork id="engagements" />

      <section className="border-t border-border-subtle bg-bg-elevated py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="For product customers"
            title="Implementation and support for Friensys products"
            align="left"
          />
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {productServices.map((s) => (
              <div key={s.title}>
                <dt className="font-semibold text-text-primary">{s.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text-secondary">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
