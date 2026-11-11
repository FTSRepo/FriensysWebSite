import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynIcon } from "@/components/ui/DynIcon";
import { getEngagements } from "@/lib/content";

const steps = [
  { title: "Discover", body: "One business problem, written down with the KPI it should move." },
  { title: "Design", body: "Fixed scope, timeline and price agreed before we write code." },
  { title: "Build", body: "Weekly demos on real data. A human approves anything that touches customers or money." },
  { title: "Run & improve", body: "Measure the result, then scale what works — support, AMC and new features." },
];

export function HowWeWork({ id }: { id?: string }) {
  const engagements = getEngagements();

  return (
    <section id={id} className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How we work"
          title="Start small. Measure. Then scale."
          subtitle="Every engagement is tied to a business result you can check — not a slide deck."
          align="left"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-accent-primary pt-5">
              <span className="text-sm font-semibold text-accent-primary">0{i + 1}</span>
              <h3 className="mt-1 text-lg font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.body}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-20 text-sm font-semibold uppercase tracking-widest text-text-muted">
          Ways to engage
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((e) => (
            <div
              key={e.name}
              className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <DynIcon name={e.icon} className="h-5 w-5 text-accent-primary" aria-hidden="true" />
                <h4 className="font-semibold text-text-primary">{e.name}</h4>
              </div>
              <p className="mt-1 text-xs font-medium text-text-muted">For: {e.buyer}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{e.deliverable}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
