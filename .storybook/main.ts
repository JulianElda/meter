import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
