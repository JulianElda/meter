import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  stories: [
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
};
export default config;
