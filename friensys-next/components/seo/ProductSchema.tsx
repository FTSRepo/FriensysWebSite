import { JsonLd } from "./JsonLd";
import { buildProductSchema } from "@/lib/schema";

export function ProductSchema(props: { name: string; description: string; url: string; image?: string }) {
  return <JsonLd data={buildProductSchema(props)} />;
}
