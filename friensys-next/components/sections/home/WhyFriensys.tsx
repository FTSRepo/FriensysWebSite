import { BadgeCheck, Boxes, LineChart, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Founder-led, senior engineering",
    body: "Led by a software architect with 20+ years of enterprise delivery. The people who scope your project are the people who build it.",
  },
  {
    icon: Boxes,
    title: "We run our own products",
    body: "Our ERP, CRM, loyalty, helpdesk and procurement platforms are used by real institutions and businesses every day. We know what production means.",
  },
  {
    icon: LineChart,
    title: "AI measured against a KPI",
    body: "AI pilots have a fixed scope and a business number to move — admissions, collections, hours saved. We scale only what works.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    body: "Your data stays yours. Human review on money and customer-facing decisions, DPDPA-aligned handling of personal data, code and IP handed over to you.",
  },
];

export function WhyFriensys() {
  return (
    <section className="border-y border-border-subtle bg-bg-elevated py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Why Friensys" title="A safe pair of hands for ambitious work" align="left" />
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-accent-primary" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
