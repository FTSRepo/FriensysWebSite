import { describe, it, expect } from "vitest";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

describe("buildMetadata", () => {
  it("sets title and canonical URL", () => {
    const meta = buildMetadata({ title: "Test Page", path: "/test" });
    expect(meta.title).toBe("Test Page");
    expect(meta.alternates?.canonical).toBe(`${site.url}/test`);
  });

  it("falls back to site description", () => {
    const meta = buildMetadata({ title: "T" });
    expect(meta.description).toBe(site.description);
  });

  it("uses provided description", () => {
    const meta = buildMetadata({ title: "T", description: "Custom desc" });
    expect(meta.description).toBe("Custom desc");
  });

  it("sets noindex robots when noIndex=true", () => {
    const meta = buildMetadata({ title: "T", noIndex: true });
    expect(meta.robots).toMatchObject({ index: false, follow: false });
  });

  it("sets indexable robots by default", () => {
    const meta = buildMetadata({ title: "T" });
    expect(meta.robots).toMatchObject({ index: true, follow: true });
  });

  it("uses the static default og image", () => {
    const meta = buildMetadata({ title: "T", path: "/about" });
    const ogImages = (meta.openGraph as { images?: { url: string }[] })?.images;
    expect(ogImages?.[0]?.url).toBe("/og-default.png");
  });

  it("sets article type in openGraph", () => {
    const meta = buildMetadata({ title: "T", type: "article" });
    expect((meta.openGraph as { type?: string })?.type).toBe("article");
  });
});
