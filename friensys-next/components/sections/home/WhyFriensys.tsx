"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynIcon } from "@/components/ui/DynIcon";
import { fadeUp, stagger } from "@/lib/motion";

const reasons = [
  {
    icon: "MapPin",
    title: "Built for Indian schools",
    body: "CBSE, ICSE, state boards. DPDPA-compliant data residency in India. GST-ready fee receipts. Aadhaar-linked student IDs.",
  },
  {
    icon: "Sparkles",
    title: "AI-first, not AI-washed",
    body: "Attendance anomaly alerts, fee default prediction, and auto-generated progress narratives — live today, not on a roadmap.",
  },
  {
    icon: "Zap",
    title: "Same-day onboarding",
    body: "Import your existing student data via CSV or Google Sheets. Go live in hours, not months.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise security",
    body: "ISO 27001-aligned controls, end-to-end encryption, granular RBAC, and a 99.9% uptime SLA backed by AWS.",
  },
  {
    icon: "IndianRupee",
    title: "Transparent pricing",
    body: "Per-student annual billing. No hidden modules, no per-seat surprises. Switch plans as you grow.",
  },
  {
    icon: "LifeBuoy",
    title: "Dedicated success manager",
    body: "Every school gets a named CSM for onboarding, training, and ongoing support — not a ticket queue.",
  },
];

export function WhyFriensys() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <SectionHeading
          label="Why Friensys"
          title="Built for the way Indian schools actually work"
          subtitle="Not a generic ERP bolted onto education. Every feature exists because a school principal asked for it."
          align="left"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-3 rounded-[14px] overflow-hidden border border-border-subtle"
        >
          {reasons.map((r) => (
            <motion.div key={r.title} variants={fadeUp} className="bg-bg-base p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-border-subtle bg-bg-elevated">
                <DynIcon name={r.icon} className="h-6 w-6 text-accent-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{r.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
