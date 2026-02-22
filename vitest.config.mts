import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/src": "/src",
    },
  },
  test: {
    browser: {
      enabled: true,
      instances: [{ browser: "chromium" }],
      provider: playwright({
        launchOptions: {
          executablePath: "/usr/bin/chromium",
        },
      }),
    },
    setupFiles: "./src/test-setup.ts",
  },
});
