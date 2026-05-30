"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductFrame } from "@/components/ui/ProductFrame";
import { fadeUp, stagger } from "@/lib/motion";

const heroStats = [
  { value: "500+", label: "schools live" },
  { value: "2M+", label: "students managed" },
  { value: "8 yrs", label: "running in India" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.15fr]">
          {/* LEFT COLUMN */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <Eyebrow>School ERP · trusted by 500+ schools</Eyebrow>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-[clamp(40px,5.2vw,64px)] font-semibold leading-[1.02] tracking-[-0.02em] text-text-primary"
            >
              Run the whole school.{" "}
              <span className="italic text-accent-primary">
                Not just the fees.
              </span>
            </motion.h1>

            {/* Lead paragraph */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[480px] text-lg leading-relaxed text-text-secondary"
            >
              Admissions, fees, attendance, exams, payroll and parent
              communication — one platform built for Indian K–12 schools, not
              bolted on.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <AuroraButton href="/contact" variant="primary" size="lg">
                Book a free demo
              </AuroraButton>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-text-primary hover:text-accent-primary"
              >
                See how it works →
              </Link>
            </motion.div>

            {/* Stat row */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex gap-0 border-t border-border-subtle pt-6"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="pr-9 mr-9 border-r border-border-subtle last:border-0 last:mr-0 last:pr-0"
                >
                  <p className="font-display text-3xl font-semibold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <ProductFrame
              src="/screenshots/school-erp-dashboard.png"
              alt="Friensys School ERP dashboard"
              aspect="aspect-[16/11]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
