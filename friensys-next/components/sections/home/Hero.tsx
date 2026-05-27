"use client";

import { motion } from "framer-motion";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { TerminalStat } from "@/components/ui/TerminalStat";
import { fadeUp, stagger } from "@/lib/motion";

const heroStats = [
  { value: "500+", label: "schools live" },
  { value: "2M+", label: "students managed" },
  { value: "99.9%", label: "uptime SLA" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      <GradientMesh className="absolute inset-0 h-full w-full" intensity={0.06} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated px-4 py-1.5 text-xs font-medium text-text-secondary tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-lime animate-pulse" />
              India&apos;s fastest-growing school ERP
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Run your school{" "}
            <span className="bg-gradient-to-r from-accent-primary via-accent-cyan to-accent-lime bg-clip-text text-transparent">
              end to end
            </span>
            , not just the fees
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed"
          >
            Friensys School ERP unifies admissions, academics, fees, payroll,
            and AI-powered insights on one platform — purpose-built for Indian K‑12 schools.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <AuroraButton href="/contact" variant="primary" size="lg">
              Book a free demo
            </AuroraButton>
            <AuroraButton href="/products" variant="outline" size="lg">
              Explore modules
            </AuroraButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10"
          >
            {heroStats.map((s) => (
              <TerminalStat key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
