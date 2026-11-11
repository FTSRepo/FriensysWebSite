import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTeam } from "@/lib/content";

export function Leadership({ title = "Founder-led: AI and enterprise experience at the top" }: { title?: string }) {
  const team = getTeam();
  if (team.length === 0) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Leadership" title={title} align="left" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="flex flex-col gap-6 rounded-[var(--radius-xl)] border border-border-subtle bg-bg-elevated p-7 shadow-sm sm:flex-row"
            >
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-3xl font-bold text-accent-primary"
                >
                  {m.name.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-text-primary">{m.name}</h3>
                <p className="text-sm font-medium text-accent-primary">
                  {m.role}
                  {m.years && ` · ${m.years}`}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{m.bio}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-bg-overlay px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-accent-primary hover:underline"
                  >
                    LinkedIn profile
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
