"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, stagger } from "@/lib/motion";

const featured = [
  {
    slug: "school-erp",
    name: "School ERP",
    tagline: "The complete school management system",
    screenshot: "/screenshots/school-erp-dashboard.png",
    badge: null,
    large: true,
  },
  {
    slug: "ai-suite",
    name: "AI Suite",
    tagline: "Predictive insights for smarter decisions",
    screenshot: "/screenshots/ai-suite-dashboard.png",
    badge: "new" as const,
    large: false,
  },
  {
    slug: "fees-management",
    name: "Fees & Finance",
    tagline: "Automate collections, eliminate defaults",
    screenshot: "/screenshots/fees-management-dashboard.png",
    badge: null,
    large: false,
  },
  {
    slug: "school-app",
    name: "School App",
    tagline: "Your school in every parent's pocket",
    screenshot: "/screenshots/school-app.png",
    badge: "live" as const,
    large: false,
  },
];

export function ProductBento() {
  return (
    <section className="py-24 bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Products"
          title="Every tool your school needs, beautifully connected"
          subtitle="Mix and match modules. They all share one database, one login, one support line."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p) => (
            <motion.div
              key={p.slug}
              variants={fadeUp}
              className={p.large ? "sm:col-span-2 lg:col-span-2" : "col-span-1"}
            >
              <Link href={`/products/${p.slug}`}>
                <BentoCard className="group h-full overflow-hidden p-0" glow>
                  <div className="relative h-48 w-full overflow-hidden sm:h-56">
                    <Image
                      src={p.screenshot}
                      alt={`${p.name} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-overlay/80 to-transparent" />
                    {p.badge && (
                      <div className="absolute right-3 top-3">
                        <Badge variant={p.badge}>{p.badge === "new" ? "New" : "Live"}</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-text-primary">{p.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{p.tagline}</p>
                  </div>
                </BentoCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
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
