import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/shared/CTASection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getFaqs } from "@/lib/content";
import { Shield, Server, Lock, Eye, Clock, FileText } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Security & Compliance — DPDPA, AWS Mumbai, ISO 27001",
  description:
    "Your school's data hosted in India on AWS Mumbai. AES-256 encryption, TLS 1.2+, DPDPA-aligned, daily backups, audit logs. ISO 27001 certification in progress.",
  path: "/security",
});

const controls = [
  {
    icon: Server,
    title: "AWS Mumbai (ap-south-1)",
    body: "All customer data hosted in India — no cross-border transfer. Compliant with DPDPA §16 on data localisation.",
    badge: "dpdpa" as const,
  },
  {
    icon: Lock,
    title: "Encryption at rest & in transit",
    body: "AES-256 encryption at rest. TLS 1.2+ for all data in transit. Separate encryption keys per tenant.",
    badge: null,
  },
  {
    icon: Clock,
    title: "Automated daily backups",
    body: "Full database snapshots daily with 30-day retention. Point-in-time recovery available on Enterprise plans.",
    badge: null,
  },
  {
    icon: Eye,
    title: "Audit logs on sensitive actions",
    body: "Every fee deletion, marks edit, and record modification is logged with timestamp, user, IP, and reason. Immutable.",
    badge: null,
  },
  {
    icon: FileText,
    title: "DPDPA compliance posture",
    body: "Aligned with India's Digital Personal Data Protection Act, 2023. Data Processing Agreements available on request. Consent management for parent data.",
    badge: "dpdpa" as const,
  },
  {
    icon: Shield,
    title: "ISO 27001 — in progress",
    body: "We are pursuing ISO 27001 certification. Our controls are structured around ISMS principles. Expected: 2026.",
    badge: "iso" as const,
  },
];

export default function SecurityPage() {
  const faqs = getFaqs("security");
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Security"
            title="Your school's data. Hosted in India. Compliant by design."
            subtitle="We treat student data with the same care a principal would — locked down, audited, and never shared without consent."
            className="mb-16"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {controls.map(({ icon: Icon, title, body, badge }) => (
              <BentoCard key={title} glow className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-overlay text-accent-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  {badge && (
                    <Badge variant={badge}>
                      {badge === "iso" ? "In progress" : badge.toUpperCase()}
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{body}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-text-primary text-center">Security FAQ</h2>
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
        title="Need our security documentation?"
        subtitle="We share our Data Processing Agreement and security questionnaire on request — usually within 48 hours."
        primaryLabel="Request security docs"
        primaryHref="/contact?intent=security"
        secondaryLabel="View DPDPA compliance"
        secondaryHref="/legal/dpdpa-compliance"
      />
    </>
  );
}
