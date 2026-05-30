"use client";

import { motion } from "framer-motion";
import { LiveCounter } from "@/components/ui/LiveCounter";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  { value: 500, suffix: "+", label: "Schools live" },
  { value: 2000000, suffix: "+", label: "Students managed" },
  { value: 99, suffix: "%", label: "Uptime SLA" },
  { value: 18, suffix: " states", label: "Pan-India coverage" },
];

export function StatsCounter() {
  return (
    <section className="py-20 bg-bg-base border-y border-border-subtle">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 divide-x divide-border-subtle md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="py-6 px-8">
              <LiveCounter value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
