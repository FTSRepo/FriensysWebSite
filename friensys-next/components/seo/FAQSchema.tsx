import { JsonLd } from "./JsonLd";
import { buildFAQSchema } from "@/lib/schema";

export function FAQSchema({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return <JsonLd data={buildFAQSchema(faqs)} />;
}
