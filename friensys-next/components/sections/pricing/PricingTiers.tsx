import { AuroraButton } from "@/components/ui/AuroraButton";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

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
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-glow mb-4">
            Pricing
          </span>
          <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
            Two ways to start. One platform.
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Pricing depends on student count, modules, and onboarding requirements.
            We share a tailored quote within 48 hours of a call — no haggling, no surprises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <BentoCard
              key={tier.name}
              glow
              className={`flex flex-col justify-between p-8 ${tier.highlight ? "border-accent-primary/30" : ""}`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">{tier.name}</h2>
                    <p className="mt-1 text-sm text-text-muted">{tier.tagline}</p>
                  </div>
                  {tier.highlight && <Badge variant="new">Popular</Badge>}
                </div>
                <p className="text-sm text-text-secondary mb-6">{tier.description}</p>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-lime" />
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
            </BentoCard>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          Need a customised module set?{" "}
          <a href="/contact" className="text-accent-primary hover:text-accent-glow transition-colors">
            Talk to us
          </a>{" "}
          — Friensys is fully modular.
        </p>
      </div>
    </section>
  );
}
