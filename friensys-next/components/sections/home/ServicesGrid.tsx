import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynIcon } from "@/components/ui/DynIcon";
import { getServices } from "@/lib/content";

export function ServicesGrid() {
  const services = getServices();

  return (
    <section className="border-y border-border-subtle bg-bg-elevated py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Five ways we work with you"
          subtitle="Start with one. Most clients add the others as they grow."
          align="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`${i === 0 ? "md:col-span-2 " : ""}group rounded-[var(--radius-xl)] border border-border-subtle bg-bg-base p-7 transition-all hover:border-accent-primary/40 hover:shadow-md`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-accent-primary/10 text-accent-primary">
                  <DynIcon name={s.icon} className="h-5 w-5" aria-hidden="true" />
                </div>
                <ArrowRight className="h-5 w-5 text-text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent-primary" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text-primary">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.short}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.deliverables.slice(0, 3).map((d) => (
                  <li
                    key={d.title}
                    className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 text-xs font-medium text-text-secondary"
                  >
                    {d.title}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
