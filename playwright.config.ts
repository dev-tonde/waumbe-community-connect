// playwright.config.ts
import { defineConfig, devices } from "@playwright/test"; // ← bring in devices

export default defineConfig({
  timeout: 30_000,
  testDir: "./tests",
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:5173", // ← 5173
    trace: "on-first-retry",
    headless: true,
  },
  webServer: {
    // Use your npm script so the local vite binary is found
    command: process.env.PREVIEW_CMD ?? "npm run preview",
    url: process.env.BASE_URL ?? "http://localhost:5173", // ← match 5173
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
