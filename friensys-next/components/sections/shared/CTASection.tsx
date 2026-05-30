"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    <section className="py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-accent-primary px-8 py-16 md:px-16 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Marigold accent rule */}
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span className="block h-px w-10 bg-accent-amber" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl font-semibold text-white"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-white/80 max-w-xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              {/* Primary: white button — visible on teal background */}
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-white px-6 py-3.5 text-[15px] font-semibold text-accent-primary hover:bg-white/90 transition-all duration-200 hover:-translate-y-px"
              >
                {primaryLabel}
              </Link>

              {/* Secondary: outline-on-teal */}
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-[11px] border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-px"
              >
                {secondaryLabel}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
