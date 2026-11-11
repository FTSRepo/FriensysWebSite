import Link from "next/link";
import { ArrowRight, Building2, Rocket, Store } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    body: "Take an idea to a launch-ready product. MVP in weeks, a product team on demand and a clear path to scale.",
    points: ["MVP development", "AI features in your product", "Engineers on demand"],
    href: "/services/custom-software",
    cta: "Build your product",
  },
  {
    icon: Store,
    title: "SMEs",
    body: "Automate the work that slows your team down — without hiring an IT department.",
    points: ["Custom ERP & CRM", "Document AI & WhatsApp assistants", "AI on your own data"],
    href: "/services/ai-solutions",
    cta: "Find where AI helps",
  },
  {
    icon: Building2,
    title: "Mid-size & established businesses",
    body: "Modernise the systems your business already runs on, safely and without stopping operations.",
    points: ["Legacy modernisation", "Cloud migration", "AMC & dedicated teams"],
    href: "/services/modernisation-support",
    cta: "Modernise your systems",
  },
];

export function WhoWeHelp() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Who we help"
          title="Built for the stage your business is at"
          align="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, body, points, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-7 shadow-sm transition-all hover:border-border-strong hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-accent-primary" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{body}</p>
              <ul className="mt-5 space-y-2 text-sm text-text-primary">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-accent-primary">
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
