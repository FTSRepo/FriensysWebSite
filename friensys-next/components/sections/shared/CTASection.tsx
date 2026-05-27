"use client";

import { motion } from "framer-motion";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { fadeUp, stagger } from "@/lib/motion";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to transform your school?",
  subtitle = "Join 500+ schools already running on Friensys. Book a free 30-minute demo — no commitment, no credit card.",
  primaryLabel = "Book a free demo",
  primaryHref = "/contact",
  secondaryLabel = "View pricing",
  secondaryHref = "/pricing",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 bg-bg-elevated">
      <GradientMesh className="absolute inset-0 h-full w-full" intensity={0.04} />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-text-secondary leading-relaxed"
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
            <AuroraButton href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </AuroraButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
