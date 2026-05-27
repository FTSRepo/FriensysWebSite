import { JsonLd } from "./JsonLd";
import { buildArticleSchema } from "@/lib/schema";

export function ArticleSchema(props: { title: string; description: string; url: string; datePublished: string; dateModified?: string; author?: string; image?: string }) {
  return <JsonLd data={buildArticleSchema(props)} />;
}
