"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFrame } from "@/components/ui/ProductFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, stagger } from "@/lib/motion";

const featured = [
  {
    slug: "school-erp",
    name: "School ERP",
    tagline: "The complete school management system",
    description:
      "Admissions, timetables, attendance, exams, and HR — managed from one dashboard built for Indian K–12 schools.",
    screenshot: "/screenshots/school-erp-dashboard.png",
    badge: null,
  },
  {
    slug: "ai-suite",
    name: "AI Suite",
    tagline: "Predictive insights for smarter decisions",
    description:
      "Surface dropout risks, fee default patterns, and academic trends before they become problems.",
    screenshot: "/screenshots/ai-suite-dashboard.png",
    badge: "new" as const,
  },
  {
    slug: "fees-management",
    name: "Fees & Finance",
    tagline: "Automate collections, eliminate defaults",
    description:
      "Online fee payments, automated reminders, concession tracking, and audit-ready ledgers in one place.",
    screenshot: "/screenshots/fees-management-dashboard.png",
    badge: null,
  },
  {
    slug: "school-app",
    name: "School App",
    tagline: "Your school in every parent's pocket",
    description:
      "Push notices, homework, attendance, and fee receipts directly to parents — no WhatsApp groups needed.",
    screenshot: "/screenshots/school-app.png",
    badge: "live" as const,
  },
];

export function ProductBento() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <SectionHeading
          label="Our Products"
          title="Every tool your school needs, on one platform"
          subtitle="Mix and match modules. They share one database, one login, one support line."
          align="left"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 flex flex-col gap-20"
        >
          {featured.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                {/* Image cell — left on even, right on odd (via order) */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <ProductFrame
                    src={p.screenshot}
                    alt={`${p.name} dashboard`}
                  />
                </div>

                {/* Text cell — right on even, left on odd */}
                <div className={isEven ? "" : "lg:order-1"}>
                  <Eyebrow>
                    {`0${i + 1} — ${p.name}`}
                  </Eyebrow>

                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                    {p.tagline}
                  </h3>

                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {p.description}
                  </p>

                  {p.badge && (
                    <div className="mt-4">
                      <Badge variant={p.badge}>
                        {p.badge === "new" ? "New" : "Live"}
                      </Badge>
                    </div>
                  )}

                  <Link
                    href={`/products/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-primary transition-all hover:gap-3"
                  >
                    Explore {p.name} →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 border-t border-border-subtle pt-8">
          <Link
            href="/products"
            className="text-sm font-medium text-accent-primary hover:underline"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
}
