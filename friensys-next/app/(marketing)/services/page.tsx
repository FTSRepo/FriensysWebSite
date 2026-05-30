import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Rocket, GraduationCap, Wrench, ArrowRightLeft, Puzzle, LifeBuoy } from "lucide-react";

export const metadata = buildMetadata({
  title: "Services — Friensys Implementation & Support",
  description:
    "Friensys implementation, training, migration, customisation, and annual maintenance services for schools. White-glove support from day one.",
  path: "/services",
});

const services = [
  {
    icon: Rocket,
    title: "Implementation",
    tagline: "Go live in 4–8 weeks",
    description:
      "A dedicated implementation engineer owns your entire onboarding — data migration, configuration, parallel-run management, and go-live support. We don't hand you a manual and step back.",
    deliverables: [
      "Master data migration from your current system",
      "Fee structure and module configuration",
      "Staff training for admin, accounts, and reception",
      "Parallel-run validation for one billing cycle",
      "Go-live support for 48 hours post-cutover",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training",
    tagline: "On-site or remote",
    description:
      "Role-based training sessions for every type of user: principal dashboards, admin workflows, fee collection, exam management, and parent portal.",
    deliverables: [
      "Principal and management dashboard orientation",
      "Admin staff workflow training (3–4 hours)",
      "Fee collection and reconciliation hands-on",
      "Exam and report card setup walkthrough",
      "Recorded sessions for staff onboarded later",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Migration",
    tagline: "From any legacy system",
    description:
      "We handle data migration from Excel, Tally, or any previous ERP. You export — we transform, clean, validate, and import. You don't touch the migration scripts.",
    deliverables: [
      "Student master and academic history",
      "Fee ledger and outstanding balance migration",
      "Staff records and payroll history",
      "Exam results and report card archive",
      "Data validation report before go-live",
    ],
  },
  {
    icon: Wrench,
    title: "Annual Maintenance (AMC)",
    tagline: "Covered every year",
    description:
      "All updates, patches, and core feature additions are included in AMC. Your school stays on the latest version without additional charges.",
    deliverables: [
      "All platform updates and security patches",
      "New feature releases (core modules)",
      "Priority support ticket queue",
      "Annual health check and performance review",
      "Backup and disaster recovery verification",
    ],
  },
  {
    icon: Puzzle,
    title: "Customisation",
    tagline: "For schools with specific workflows",
    description:
      "Need a custom report, an unusual fee structure, or a non-standard workflow? We scope and build customisations that integrate cleanly with the core platform.",
    deliverables: [
      "Requirements scoping session",
      "Custom report builder (up to 5 reports/year)",
      "Non-standard fee head configuration",
      "Integration with third-party systems (on request)",
      "Custom parent communication templates",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    tagline: "Phone + ticket + WhatsApp",
    description:
      "Dedicated support during school hours (8am–6pm IST) via ticket, WhatsApp, and phone. Emergency response within 4 hours for critical issues.",
    deliverables: [
      "Ticket response within 4 business hours",
      "WhatsApp group for daily operations queries",
      "Phone support for billing cycle and exam days",
      "Monthly check-in with your account manager",
      "Root cause analysis for any data issues",
    ],
  },
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 font-display text-4xl font-semibold text-text-primary md:text-5xl">
            We don&apos;t just sell software
          </h1>
          <p className="text-lg text-text-secondary">
            Every Friensys school gets an implementation engineer, a migration team, and ongoing
            support — not a knowledge base and a ticket queue.
          </p>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, tagline, description, deliverables }) => (
              <div
                key={title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-overlay p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-bg-base text-accent-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-text-primary">{title}</h3>
                <p className="mb-3 text-xs font-medium text-accent-primary">{tagline}</p>
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">{description}</p>
                <ul className="space-y-2">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-text-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        subtitle="Tell us about your school and we'll scope out the right implementation plan."
        primaryLabel="Talk to our team"
        primaryHref="/contact?intent=services"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
