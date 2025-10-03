// tests/routes.spec.ts
import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/contact",
  "/team",
  "/partners",
  "/donate",
  "/volunteer",
  "/gallery",
  "/testimonials",
  "/testimonials/awards",
  "/programs",
  "/programs/academic-development",
  "/programs/societal-reformation",
  "/programs/courses",
  "/programs/learnerships",
  "/programs/skills-development",
  "/programs/volunteer",
  "/programs/entrepreneurship",
  "/entrepreneurship",
  "/entrepreneurship/courses",
  "/entrepreneurship/learnership",
  "/entrepreneurship/fundraising",
  "/entrepreneurship/contact",
  "/entrepreneurship/donate",
];

for (const route of routes) {
  test(`route ${route} should not 404`, async ({ page, baseURL }) => {
    // surface runtime errors to the test output
    page.on("pageerror", (err) => console.error("pageerror:", err));
    page.on("console", (msg) => {
      if (["error", "warning"].includes(msg.type())) {
        console.log(`[console.${msg.type()}] ${msg.text()}`);
      }
    });

    const resp = await page.goto(route, { waitUntil: "domcontentloaded" });
    // If it's a SPA fallback, preview should still return 200 with index.html
    expect(resp, `No response for ${baseURL}${route}`).not.toBeNull();
    expect(resp!.status(), `Bad status for ${baseURL}${route}`).toBeLessThan(
      400
    );

    // Optional sanity check: the app mounted something under #root eventually
    await page.waitForFunction(
      () => (document.getElementById("root")?.children.length ?? 0) > 0,
      { timeout: 5000 }
    );
  });
}
