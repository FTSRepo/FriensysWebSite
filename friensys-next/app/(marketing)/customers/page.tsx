import Image from "next/image";
import { getSchools, getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildOrganizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Our Customers — Schools That Trust Friensys",
  description:
    "Over 25 schools across India manage fees, attendance, and academics on Friensys. See who we work with.",
  path: "/customers",
});

export default function CustomersPage() {
  const schools = getSchools();
  const caseStudies = getCaseStudies();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Customers", url: "/customers" },
        ])}
      />
      <JsonLd data={buildOrganizationSchema()} />

      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Trusted by schools across India
          </p>
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Schools that run on Friensys
          </h1>
          <p className="text-lg text-text-secondary">
            From 200-student neighbourhood schools to 3,000-student campuses — all managing their
            operations on one platform.
          </p>
        </div>
      </section>

      <section className="bg-bg-elevated py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 items-center justify-items-center">
            {schools.map((school) => (
              <div
                key={school.logo}
                className="flex h-16 w-full items-center justify-center rounded-[var(--radius-md)] border border-border-subtle bg-bg-overlay p-3 transition-colors hover:border-border-strong"
                title={school.name}
              >
                <Image
                  src={school.logo}
                  alt={school.name}
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
              Results our customers share
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <article
                  key={cs.slug}
                  className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <Image
                      src={cs.logo}
                      alt={cs.school}
                      width={48}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">{cs.school}</p>
                      <p className="text-xs text-text-muted">{cs.city}</p>
                    </div>
                  </div>

                  <h3 className="mb-4 text-sm font-medium text-text-primary leading-snug">
                    {cs.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                    {cs.summary}
                  </p>

                  <dl className="grid grid-cols-3 gap-4 border-t border-border-subtle pt-6">
                    {cs.stats.map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs text-text-muted">{label}</dt>
                        <dd className="mt-1 text-xl font-bold text-accent-primary">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Join 500+ schools running on Friensys"
        subtitle="Get a personalised demo tailored to your school size and requirements."
        primaryLabel="Request a demo"
        primaryHref="/contact?intent=demo"
        secondaryLabel="See our products"
        secondaryHref="/products"
      />
    </>
  );
}
