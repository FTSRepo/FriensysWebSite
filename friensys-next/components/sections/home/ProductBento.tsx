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
    tagline: "Admissions, fees, exams and parent communication for 300+ institutions",
    screenshot: "/screenshots/school-erp-dashboard.png",
    badge: "live" as const,
    large: true,
  },
  {
    slug: "education-crm",
    name: "Education CRM",
    tagline: "Admission leads from every source, followed up in time",
    screenshot: "/screenshots/education-crm.png",
    badge: null,
    large: false,
  },
  {
    slug: "customer-loyalty",
    name: "Customer Loyalty",
    tagline: "Points, tiers, coupons and campaigns for retail",
    screenshot: "/screenshots/customer-loyalty.png",
    badge: null,
    large: false,
  },
  {
    slug: "marketplace",
    name: "Procurement Marketplace",
    tagline: "Sourcing of bought-out parts for manufacturers",
    screenshot: "/screenshots/marketplace.png",
    badge: null,
    large: false,
  },
  {
    slug: "escalation",
    name: "Escalation System",
    tagline: "Ticket routing with SLA tracking",
    screenshot: "/screenshots/escalation.png",
    badge: null,
    large: false,
  },
];

export function ProductBento() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our products"
          title="We don't just build for clients — we run our own software at scale"
          subtitle="Ready-to-deploy platforms you can start with today, then extend with custom features and AI."
          align="left"
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
                      sizes={p.large ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                                        {p.badge && (
                      <div className="absolute right-3 top-3">
                        <Badge variant={p.badge}>Live</Badge>
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

        <div className="mt-8">
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
