import { AuroraButton } from "@/components/ui/AuroraButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DynIcon } from "@/components/ui/DynIcon";

const tiers = [
  {
    name: "Core",
    tagline: "For schools starting their ERP journey.",
    description:
      "Admissions, fees, attendance, and the parent app. The essential four — runs most schools end-to-end.",
    features: [
      "Admissions & student records",
      "Fee collection + daily reports",
      "Attendance (students + staff)",
      "Parent app (branded)",
      "Bulk SMS / notifications",
      "Principal dashboard",
    ],
    cta: "Get a Core quote",
    href: "/contact?intent=pricing-core",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "For schools that need the full stack.",
    description:
      "Every Core module plus Exams, Report Cards, Transport, Library, HR & Payroll, and admin-AI features as they ship.",
    features: [
      "Everything in Core",
      "Exams + Report Cards (CBSE/ICSE/State)",
      "Transport + GPS",
      "Library management",
      "HR + Payroll",
      "OD-SAS (faculty substitution)",
      "Admin-AI features (as they ship)",
    ],
    cta: "Get a Growth quote",
    href: "/contact?intent=pricing-growth",
    highlight: true,
  },
];

export function PricingTiers() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 flex flex-col items-center gap-3">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Two ways to start.{" "}
            <em className="not-italic text-accent-primary">One platform.</em>
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            Pricing depends on student count, modules, and onboarding requirements.
            We share a tailored quote within 48 hours of a call — no haggling, no surprises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-[14px] border bg-bg-overlay p-8 shadow-[0_1px_2px_rgba(27,23,20,.05),0_4px_12px_-6px_rgba(27,23,20,.08)] ${
                tier.highlight
                  ? "border-accent-primary"
                  : "border-border-subtle"
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-text-primary">
                      {tier.name}
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">{tier.tagline}</p>
                  </div>
                  {tier.highlight && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-bg-elevated px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-6">{tier.description}</p>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <DynIcon name="CheckCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-primary" />
                      <span className="text-sm text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <AuroraButton
                href={tier.href}
                variant={tier.highlight ? "primary" : "outline"}
                className="mt-8 w-full justify-center"
              >
                {tier.cta}
              </AuroraButton>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          Need a customised module set?{" "}
          <a href="/contact" className="text-accent-primary transition-colors hover:text-[#083F39]">
            Talk to us
          </a>{" "}
          — Friensys is fully modular.
        </p>
      </div>
    </section>
  );
}
