import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getModules } from "@/lib/content";

export function ModuleAccordion() {
  const groups = getModules();
  return (
    <section id="modules" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="40+ Modules"
          title="Everything a school runs. One platform."
          subtitle="Start with what you need. Activate more as you grow."
          align="center"
          className="mb-12"
        />
        <Accordion type="multiple" className="mx-auto max-w-3xl space-y-2">
          {groups.map((group) => (
            <AccordionItem
              key={group.name}
              value={group.name}
              className="rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-text-primary hover:no-underline">
                {group.name}
                <span className="ml-2 text-xs font-normal text-text-muted">
                  {group.modules.length} modules
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-wrap gap-2 pb-2">
                  {group.modules.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-border-subtle bg-bg-overlay px-3 py-1 text-xs text-text-secondary"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
