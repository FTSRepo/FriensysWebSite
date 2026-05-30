import Image from "next/image";
import { getSchools } from "@/lib/content";

export function TrustStrip() {
  const schools = getSchools();
  const logos = [...schools, ...schools];

  return (
    <section className="border-y border-border-subtle bg-bg-elevated py-12 overflow-hidden">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted text-center mb-8">
        Trusted by 500+ schools across India
      </p>
      {/* Edge-fade masks so logos dissolve into the section background at both ends */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-elevated to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-elevated to-transparent"
        />
        <div className="group relative flex">
          <div
            className="flex shrink-0 items-center gap-6 group-hover:[animation-play-state:paused]"
            style={{
              animation: "marquee 120s linear infinite",
              width: "max-content",
            }}
          >
            {logos.map((school, i) => (
              <div
                key={`${school.logo}-${i}`}
                className="flex h-10 w-28 shrink-0 items-center justify-center rounded-lg bg-bg-overlay border border-border-subtle px-3 py-1.5 opacity-90 transition hover:opacity-100"
              >
                <Image
                  src={school.logo}
                  alt={school.name}
                  width={112}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
