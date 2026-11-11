import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { CTASection } from "@/components/sections/shared/CTASection";
import { Leadership } from "@/components/sections/home/Leadership";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Friensys Info Labs — Building Software Since 2017",
  description:
    "Friensys Info Labs is a founder-led software and AI company from Greater Noida. We have been building and deploying products since 2017 (incorporated in 2022) — custom software and our own products used by 300+ institutions — led by engineers with 20+ years of enterprise experience.",
  path: "/about",
});

const timeline = [
  { year: "2017", event: "Product development begins in Greater Noida. First School ERP deployment." },
  { year: "2018", event: "Parent app launched — first school to give parents a branded mobile experience." },
  { year: "2019", event: "100 schools milestone. CBSE + ICSE report card automation shipped." },
  { year: "2020", event: "Online class module released during COVID-19 school closures." },
  { year: "2021", event: "DigitechNomads partnership formalized for enterprise channel sales." },
  { year: "2022", event: "Company incorporated as Friensys Info Labs. Transport GPS integration + Fee Gateway (online payments) launched." },
  { year: "2023", event: "200 schools. OD-SAS device test monitoring and Customer Loyalty platform released." },
  { year: "2024", event: "300+ schools. Education CRM + admin-AI roadmap announced." },
  { year: "2025", event: "DPDPA compliance posture hardened. Procurement marketplace for manufacturers launched." },
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
              title="Software and AI that businesses depend on. Building in Greater Noida since 2017."
              subtitle="We're Friensys Info Labs — a founder-led team that builds custom software and AI for startups, SMEs and mid-size businesses, and runs its own products used by 300+ institutions."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AuroraButton href="/contact?intent=consultation">Book a free consultation</AuroraButton>
              <AuroraButton href="/case-studies" variant="outline">See our work</AuroraButton>
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
                Friensys was co-founded by Vikram Kumar, our CTO — a software architect with 20+ years of enterprise delivery, including web applications for Microsoft India and Redington (Dubai) — and Nidhi Priya, who leads administration and HR. Together they set out to bring that standard of engineering to institutions and growing businesses.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We started with schools: the first version of our ERP ran a single school in Greater Noida. Today our products run admissions, fees and operations for 300+ institutions across 12 states — alongside loyalty, helpdesk, procurement and test-monitoring platforms for retail and manufacturing businesses.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Running our own products in production is what makes us a safer partner for yours. Today we build custom software, MVPs and AI solutions — agents, document AI, knowledge assistants and predictive analytics — and we modernise and support the systems businesses already rely on. Our founders lead agentic and generative AI work personally, with AI engineers in-house to build and run it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">What we do</h2>
              <ul className="space-y-3 text-text-secondary">
                <li><strong className="text-text-primary">AI & ML solutions</strong> — agents, document AI, RAG assistants, predictive analytics.</li>
                <li><strong className="text-text-primary">Custom software & MVPs</strong> — web, mobile and SaaS products built from scratch.</li>
                <li><strong className="text-text-primary">Modernisation & support</strong> — legacy upgrades, cloud, AMC and dedicated teams.</li>
                <li><strong className="text-text-primary">Technology consulting</strong> — CTO-as-a-service and AI opportunity audits.</li>
                <li><strong className="text-text-primary">Our own products</strong> — School ERP, Education CRM, Loyalty, Escalation, Procurement Marketplace, OD-SAS.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Leadership title="Meet the founders" />

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeading label="8-year arc" title="From one school to 300+ institutions." className="mb-16" />
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
        title="Let's talk about what you're building"
        subtitle="We respond within 24 hours on business days."
      />
    </>
  );
}
