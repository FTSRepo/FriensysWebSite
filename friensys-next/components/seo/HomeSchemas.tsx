import { JsonLd } from "./JsonLd";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildProfessionalServiceSchema,
} from "@/lib/schema";

export function HomeSchemas() {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildWebSiteSchema()} />
      <JsonLd data={buildProfessionalServiceSchema()} />
    </>
  );
}
