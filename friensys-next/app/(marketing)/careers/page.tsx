import { buildMetadata } from "@/lib/seo";
import { CareersApplyForm } from "@/components/forms/CareersApplyForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Code2, BarChart3, Headphones, Megaphone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Careers — Join the Friensys Team",
  description:
    "We're building the ERP platform for Indian schools. Join a small, focused team working on real problems for real schools.",
  path: "/careers",
});

const openRoles = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    type: "Full-time · Remote",
    description:
      "Build and maintain the Friensys ERP platform. Strong fundamentals in Node.js, React, and SQL required. ERP or SaaS experience a plus.",
  },
  {
    icon: BarChart3,
    title: "Implementation Engineer",
    type: "Full-time · Hybrid",
    description:
      "Own school onboarding end-to-end — data migration, training, go-live support. Prior experience in ERP implementation or school administration welcome.",
  },
  {
    icon: Headphones,
    title: "Customer Success Executive",
    type: "Full-time · Hybrid",
    description:
      "Be the first point of contact for school admins. Resolve issues, escalate bugs, and build long-term relationships with our school accounts.",
  },
  {
    icon: Megaphone,
    title: "Growth & Marketing",
    type: "Contract · Remote",
    description:
      "Own top-of-funnel for Friensys — content, SEO, LinkedIn, and school outreach. Experience in B2B SaaS or ed-tech preferred.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />

      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Work on problems that matter to schools
          </h1>
          <p className="text-lg text-text-secondary">
            Small team. Real product. Schools that depend on what we build. If that sounds like
            your kind of work, we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-bg-elevated py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-text-primary">Open roles</h2>
          <div className="space-y-4">
            {openRoles.map(({ icon: Icon, title, type, description }) => (
              <div
                key={title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-overlay p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg-base text-accent-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold text-text-primary">{title}</h3>
                      <span className="rounded-full bg-bg-overlay px-2 py-0.5 text-xs text-text-muted">
                        {type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Don&apos;t see your role?{" "}
            <a href="#apply" className="text-accent-primary underline underline-offset-2">
              Send a speculative application
            </a>{" "}
            — we review all of them.
          </p>
        </div>
      </section>

      <section id="apply" className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary">Apply now</h2>
            <p className="mt-2 text-text-secondary">
              We read every application. Honest cover notes beat polished templates.
            </p>
          </div>
          <CareersApplyForm />
        </div>
      </section>
    </>
  );
}
