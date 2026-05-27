import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", h1: /Friensys|school|ERP/i },
  { path: "/school-erp", h1: /school ERP|management/i },
  { path: "/products", h1: /products|management needs/i },
  { path: "/ai", h1: /AI|school administrators/i },
  { path: "/pricing", h1: /pricing|plans/i },
  { path: "/customers", h1: /customers|schools/i },
  { path: "/about", h1: /about|our story/i },
  { path: "/contact", h1: /contact|get in touch/i },
  { path: "/security", h1: /security|data/i },
  { path: "/services", h1: /services|software/i },
  { path: "/blog", h1: /blog|insights/i },
  { path: "/careers", h1: /careers|work/i },
  { path: "/legal/privacy-policy", h1: /privacy/i },
  { path: "/legal/terms-of-service", h1: /terms/i },
  { path: "/legal/refund-policy", h1: /refund/i },
  { path: "/legal/dpdpa-compliance", h1: /dpdpa|compliance/i },
  { path: "/legal/cookie-policy", h1: /cookie/i },
  { path: "/legal/acceptable-use", h1: /acceptable use/i },
];

for (const { path, h1 } of pages) {
  test(`${path} → 200 + H1 + no console errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);

    const h1El = page.locator("h1").first();
    await expect(h1El).toBeVisible();
    const h1Text = await h1El.textContent();
    expect(h1Text).toMatch(h1);

    expect(consoleErrors).toHaveLength(0);
  });
}

test("product slug page renders", async ({ page }) => {
  const response = await page.goto("/products/fee-management");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("blog slug page renders", async ({ page }) => {
  const response = await page.goto("/blog/school-erp-implementation-guide");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("404 page shows not found message", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist-xyz");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1").first()).toContainText(/not found/i);
});

test("sitemap.xml is accessible", async ({ page }) => {
  const response = await page.goto("/sitemap.xml");
  expect(response?.status()).toBe(200);
  const content = await page.content();
  expect(content).toContain("<urlset");
});

test("robots.txt is accessible", async ({ page }) => {
  const response = await page.goto("/robots.txt");
  expect(response?.status()).toBe(200);
});

test("llms.txt is accessible", async ({ page }) => {
  const response = await page.goto("/llms.txt");
  expect(response?.status()).toBe(200);
});
