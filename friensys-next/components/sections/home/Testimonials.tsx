"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";
import { getTestimonials } from "@/lib/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-accent-amber" : "text-border-subtle"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section className="py-24 bg-bg-elevated">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <SectionHeading
          label="Testimonials"
          title="Principals who made the switch"
          align="left"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={fadeUp}>
              <div className="flex h-full flex-col rounded-[14px] border border-border-subtle bg-bg-overlay p-7">
                <StarRating rating={t.rating} />

                <blockquote className="mt-5 font-display text-lg italic leading-snug text-text-primary">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-auto pt-6 flex items-center gap-3">
                  <Image
                    src={t.schoolLogo}
                    alt={t.author}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border border-border-subtle bg-bg-base object-contain p-1"
                  />
                  <div>
                    <p className="text-sm font-medium text-text-primary">{t.author}</p>
                    <p className="font-mono text-[11px] text-text-muted">{t.city}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
