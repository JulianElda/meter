import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
const dirname =
  import.meta.dirname === undefined
    ? path.dirname(fileURLToPath(import.meta.url))
    : import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/src": "/src",
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [
              {
                browser: "chromium",
              },
            ],
            provider: "playwright",
          },
          name: "storybook",
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      {
        extends: true,
        test: {
          include: ["./src/**/*.test.ts"],
          name: "test",
          setupFiles: ["./src/setup-tests.ts"],
        },
      },
    ],
    setupFiles: "./src/setup-tests.ts",
  },
});
