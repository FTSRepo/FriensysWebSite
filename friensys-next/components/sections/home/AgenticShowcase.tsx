import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Reference architecture we use to explain agentic systems. Product-agnostic. */
const layers = [
  {
    name: "Channels",
    items: ["Web & app", "WhatsApp", "Email", "Internal tools", "Scheduled jobs"],
  },
  {
    name: "Orchestration",
    items: ["Planner / supervisor agent", "Specialist agents", "Task state & memory"],
    highlight: true,
  },
  {
    name: "Tools & knowledge",
    items: ["Your APIs, ERP & CRM", "MCP servers", "RAG over documents", "Databases"],
  },
  {
    name: "Models",
    items: ["Anthropic Claude", "OpenAI", "Llama & open models"],
  },
];

const controls = ["Permissions per tool", "Human approval steps", "Evaluations", "Tracing & audit log", "Cost per task"];

const useCases = [
  { title: "Enquiry & lead agents", body: "Qualify, answer and route every enquiry; draft follow-ups for a person to send." },
  { title: "Document-processing agents", body: "Read invoices, POs and forms, validate against your records, flag what doesn't match." },
  { title: "Operations copilots", body: "Agents that pull data from several systems and prepare reports, tasks and decisions." },
  { title: "Support & helpdesk agents", body: "Classify tickets, find the answer in your knowledge base, escalate with context." },
];

export function AgenticShowcase({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-bg-dark py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
              Agentic AI
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              We architect AI agents that get work done
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Our founders and in-house AI engineers design agentic systems for any business: agents
              that plan, use your tools, check their work and know when to hand over to a person.
            </p>
            <ul className="mt-8 space-y-5">
              {useCases.map((u) => (
                <li key={u.title}>
                  <p className="font-semibold text-white">{u.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{u.body}</p>
                </li>
              ))}
            </ul>
            {showLink && (
              <Link
                href="/services/agentic-ai"
                className="mt-9 inline-flex items-center gap-1.5 font-semibold text-indigo-300 hover:text-white"
              >
                Agentic AI architecture & development
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <figure aria-labelledby="agentic-arch-caption">
            <div className="space-y-3">
              {layers.map((l) => (
                <div
                  key={l.name}
                  className={
                    l.highlight
                      ? "rounded-[var(--radius-lg)] border border-teal-400/60 bg-teal-400/10 p-4"
                      : "rounded-[var(--radius-lg)] border border-slate-700 bg-slate-900/60 p-4"
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {l.name}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {l.items.map((i) => (
                      <li
                        key={i}
                        className="rounded-md bg-slate-800 px-2.5 py-1 text-sm text-slate-100"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rounded-[var(--radius-lg)] border border-dashed border-indigo-400/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
                  Guardrails across every layer
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {controls.map((c) => (
                    <li key={c} className="rounded-md bg-indigo-500/15 px-2.5 py-1 text-sm text-indigo-100">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <figcaption id="agentic-arch-caption" className="mt-3 text-xs text-slate-400">
              Our reference architecture for production agentic systems.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
