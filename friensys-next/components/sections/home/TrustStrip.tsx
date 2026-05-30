import Image from "next/image";
import { getSchools } from "@/lib/content";

export function TrustStrip() {
  const schools = getSchools();
  const logos = [...schools, ...schools];

  return (
    <section className="border-y border-border-subtle bg-bg-elevated py-10 overflow-hidden">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-text-muted">
        Trusted by 500+ schools across India
      </p>
      <div className="relative flex">
        <div
          className="flex shrink-0 gap-12 items-center"
          style={{
            animation: "scroll 40s linear infinite",
            width: "max-content",
          }}
        >
          {logos.map((school, i) => (
            <div
              key={`${school.logo}-${i}`}
              className="flex h-10 w-28 shrink-0 items-center justify-center rounded-lg bg-white/90 px-3 py-1.5 opacity-90 transition hover:opacity-100"
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
    </section>
  );
}
