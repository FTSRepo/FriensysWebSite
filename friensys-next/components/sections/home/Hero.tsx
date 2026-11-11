import { AuroraButton } from "@/components/ui/AuroraButton";
import { getStats } from "@/lib/content";

function formatStat(value: number, format: string) {
  return format === "plus" ? `${value.toLocaleString("en-IN")}+` : String(value);
}

const flow = [
  { step: "Idea", note: "Audit & scope" },
  { step: "Build", note: "MVP or system" },
  { step: "AI", note: "Agents, document AI, analytics" },
  { step: "Scale", note: "Run, support, improve" },
];

export function Hero() {
  const stats = getStats();
  const proof = ["leadership", "years", "schools", "states"]
    .map((k) => stats[k])
    .filter(Boolean);

  return (
    <section className="border-b border-border-subtle bg-bg-base pt-20 pb-16 sm:pt-28">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-primary">
            AI that works inside your business
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-text-primary sm:text-5xl lg:text-6xl">
            Build what&apos;s next.
            <br />
            Modernise what works.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            Friensys designs, builds and runs AI-powered software for startups,
            SMEs and growing mid-size businesses — led by engineers with 20+
            years of enterprise technology experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <AuroraButton href="/contact?intent=consultation" size="lg">
              Book a free consultation
            </AuroraButton>
            <AuroraButton href="/case-studies" variant="outline" size="lg">
              See our work
            </AuroraButton>
          </div>
        </div>

        {/* Engagement flow — static, no decoration */}
        <ol
          aria-label="How an engagement flows"
          className="rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-6 shadow-sm sm:p-8"
        >
          {flow.map((f, i) => (
            <li key={f.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={
                    i === 2
                      ? "flex h-10 w-10 items-center justify-center rounded-full bg-accent-cyan text-sm font-semibold text-white"
                      : "flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary text-sm font-semibold text-white"
                  }
                >
                  {i + 1}
                </span>
                {i < flow.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-border-strong" aria-hidden="true" />
                )}
              </div>
              <div className={i < flow.length - 1 ? "pb-6" : ""}>
                <p className="font-semibold text-text-primary">{f.step}</p>
                <p className="text-sm text-text-secondary">{f.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <dl className="mx-auto mt-16 grid max-w-[1200px] grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {proof.map((s) => (
          <div key={s.label} className="flex flex-col border-l-2 border-accent-primary pl-4">
            <dt className="text-sm text-text-secondary">{s.label}</dt>
            <dd className="order-first text-3xl font-bold text-text-primary">
              {formatStat(s.value, s.format)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
