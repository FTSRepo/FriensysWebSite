"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynIcon } from "@/components/ui/DynIcon";
import { fadeUp, stagger } from "@/lib/motion";

interface CapabilityItem {
  title: string;
  desc?: string;
  icon: string;
  tag: "live" | "roadmap";
}

const capabilities: CapabilityItem[] = [
  {
    title: "Attendance anomaly alerts",
    desc: "Flags students with sudden drop-off before it becomes chronic absenteeism.",
    icon: "AlertTriangle",
    tag: "live",
  },
  {
    title: "Fee default prediction",
    desc: "Scores each family's payment risk 30 days before the due date.",
    icon: "Wallet",
    tag: "live",
  },
  {
    title: "Auto progress narratives",
    desc: "Generates personalised report card comments from grade data — reviewed by teachers before publish.",
    icon: "Sparkles",
    tag: "live",
  },
  {
    title: "Parent sentiment analysis",
    icon: "Users",
    tag: "roadmap",
  },
  {
    title: "Exam paper generation",
    icon: "GraduationCap",
    tag: "roadmap",
  },
];

export function AITeaser() {
  return (
    <section className="py-24 bg-bg-elevated">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <SectionHeading
          label="AI Suite"
          title="Intelligence for the admin layer"
          subtitle="Friensys AI surfaces the right insight at the right moment — so your staff focus on students, not spreadsheets."
          align="left"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <div className="rounded-[14px] border border-border-subtle bg-bg-overlay p-6 h-full">
                <div className="flex items-start justify-between gap-3">
                  <DynIcon
                    name={item.icon}
                    className="h-5 w-5 text-accent-primary shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span
                    className={[
                      "font-mono text-[10px] uppercase tracking-[0.06em] shrink-0",
                      item.tag === "live"
                        ? "text-accent-primary"
                        : "text-text-muted",
                    ].join(" ")}
                  >
                    {item.tag === "live" ? "Live now" : "Roadmap"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary leading-snug">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:gap-3 transition-all"
          >
            Explore the AI suite →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
