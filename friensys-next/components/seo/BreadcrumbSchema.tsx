import { JsonLd } from "./JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return <JsonLd data={buildBreadcrumbSchema(items)} />;
}
