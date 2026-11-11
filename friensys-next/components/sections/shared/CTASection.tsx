"use client";

import { motion } from "framer-motion";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { fadeUp, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Have a process, document pile or dataset slowing your team down?",
  subtitle = "Book a free 30-minute consultation. We'll find where software and AI can help — and tell you honestly where they can't.",
  primaryLabel = "Book a free consultation",
  primaryHref = "/contact?intent=consultation",
  secondaryLabel = `Call ${site.contact.phone}`,
  secondaryHref = `tel:${site.contact.phone.replace(/\s/g, "")}`,
}: CTASectionProps) {
  return (
    <section className="bg-bg-dark py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-slate-300"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <AuroraButton href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
            </AuroraButton>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-slate-600 px-7 py-3.5 text-lg font-medium text-white transition-colors hover:border-white"
            >
              {secondaryLabel}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
