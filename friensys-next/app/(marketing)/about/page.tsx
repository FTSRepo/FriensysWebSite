import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Friensys — Built for Indian Schools Since 2017",
  description:
    "Friensys Info Labs was founded in Greater Noida in 2017. We build school ERP software used by 300+ schools across India. DPDPA-aligned, operated in partnership with DigitechNomads.",
  path: "/about",
});

const timeline = [
  { year: "2017", event: "Founded in Greater Noida. First school ERP deployment." },
  { year: "2018", event: "Parent app launched — first school to give parents a branded mobile experience." },
  { year: "2019", event: "100 schools milestone. CBSE + ICSE report card automation shipped." },
  { year: "2020", event: "Online class module released during COVID-19 school closures." },
  { year: "2021", event: "DigitechNomads partnership formalized for enterprise channel sales." },
  { year: "2022", event: "Transport GPS integration + Fee Gateway (online payments) launched." },
  { year: "2023", event: "200 schools. OD-SAS faculty substitution + Customer Loyalty module released." },
  { year: "2024", event: "300+ schools. Education CRM + admin-AI roadmap announced." },
  { year: "2025", event: "DPDPA compliance posture hardened. Marketplace product launched." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="About"
              title="Built for Indian schools. From Greater Noida, since 2017."
              subtitle="We're Friensys Info Labs — the team behind the school ERP that 300+ schools across India use every single day."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AuroraButton href="/contact">Talk to us</AuroraButton>
              <AuroraButton href="/customers" variant="outline">See our schools</AuroraButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-elevated py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Our story</h2>
              <p className="text-text-secondary leading-relaxed">
                Friensys started with a simple frustration: Indian school administrators were spending 3+ hours every day on tasks that a well-designed system could automate in minutes. Fee reconciliation, attendance registers, report card printing — work that kept the principal away from teaching and parents.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We built the first version for a single school in Greater Noida. By the end of year one, we had 10. By year four, we had 200. Today, 300+ schools across 12 states trust Friensys to run their daily operations.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We are not a venture-backed startup optimizing for growth metrics. We are a product company with paying customers, a profitable business, and a product roadmap driven by what school principals actually ask us for.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Founders</h2>
              <BentoCard className="p-8 text-center">
                <p className="text-text-muted text-sm">
                  Founder bios, photos, and LinkedIn URLs will be added here before launch.
                  <br />
                  <span className="text-xs opacity-60">(User to provide: name, photo, LinkedIn, 2-sentence bio)</span>
                </p>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeading label="8-year arc" title="From one school to 300+." className="mb-16" />
          <div className="mx-auto max-w-2xl">
            <ol className="relative border-l border-border-subtle space-y-8">
              {timeline.map(({ year, event }) => (
                <li key={year} className="pl-8">
                  <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border border-border-strong bg-bg-base">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                  </span>
                  <time className="text-xs font-semibold uppercase tracking-widest text-accent-primary">
                    {year}
                  </time>
                  <p className="mt-1 text-sm text-text-secondary">{event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-bg-elevated py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-text-primary">DigitechNomads partnership</h2>
            <p className="mt-4 text-text-secondary">
              Friensys operates in partnership with{" "}
              <a
                href={site.partners.digitechnomads}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-glow transition-colors"
              >
                DigitechNomads
              </a>{" "}
              for enterprise channel sales and implementations across larger school groups and education chains.
              Enterprise-grade deployments, custom SLAs, and dedicated implementation support are available through this channel.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question about Friensys?"
        subtitle="Reach out — we respond within 24 hours on business days."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="See open roles"
        secondaryHref="/careers"
      />
    </>
  );
}
