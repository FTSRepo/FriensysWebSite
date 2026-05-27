"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import { AuroraButton } from "@/components/ui/AuroraButton";
import { fadeUp, stagger } from "@/lib/motion";

const liveFeatures = [
  {
    title: "Attendance anomaly alerts",
    desc: "Flags students with sudden drop-off before it becomes chronic absenteeism.",
    badge: "live" as const,
  },
  {
    title: "Fee default prediction",
    desc: "Scores each family's payment risk 30 days before the due date.",
    badge: "live" as const,
  },
  {
    title: "Auto progress narratives",
    desc: "Generates personalised report card comments from grade data — reviewed by teachers before publish.",
    badge: "live" as const,
  },
];

const roadmapFeatures = [
  { title: "Parent sentiment analysis", badge: "roadmap" as const },
  { title: "Exam paper generation", badge: "roadmap" as const },
];

export function AITeaser() {
  return (
    <section className="relative overflow-hidden py-24 bg-bg-base">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-cyan/5" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="AI Suite"
          title="Intelligence that acts, not just reports"
          subtitle="Friensys AI surfaces the right insight at the right moment — so your staff can focus on students, not spreadsheets."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {liveFeatures.map((f) => (
            <motion.div key={f.title} variants={fadeUp}>
              <BentoCard className="h-full p-6" glow>
                <Badge variant={f.badge}>Live now</Badge>
                <h3 className="mt-4 font-semibold text-text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </BentoCard>
            </motion.div>
          ))}

          {roadmapFeatures.map((f) => (
            <motion.div key={f.title} variants={fadeUp} className="sm:col-span-1">
              <BentoCard className="h-full p-6 opacity-70">
                <Badge variant={f.badge}>Roadmap</Badge>
                <h3 className="mt-4 font-semibold text-text-secondary">{f.title}</h3>
              </BentoCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <AuroraButton href="/ai" variant="outline" size="md">
            Explore the AI manifesto →
          </AuroraButton>
        </motion.div>
      </div>
    </section>
  );
}
