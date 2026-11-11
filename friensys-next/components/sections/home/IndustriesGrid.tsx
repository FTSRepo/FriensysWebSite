import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynIcon } from "@/components/ui/DynIcon";
import { getIndustries } from "@/lib/content";

export function IndustriesGrid() {
  const industries = getIndustries();

  return (
    <section className="bg-bg-dark py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Industries</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Domain experience where it counts
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-300">
          We start from how your industry actually works — its data, its paperwork and its rules.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group flex flex-col rounded-[var(--radius-xl)] border border-slate-700 bg-slate-900/60 p-7 transition-colors hover:border-indigo-400"
            >
              <DynIcon name={i.icon} className="h-6 w-6 text-indigo-300" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">{i.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{i.short}</p>
              {i.proof && (
                <p className="mt-4 border-l-2 border-teal-400 pl-3 text-sm text-slate-200">
                  {i.proof}
                </p>
              )}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-indigo-300">
                Explore {i.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
