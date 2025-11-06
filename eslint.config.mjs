import lexis from "@julianelda/lexis";
import tailwind from "@julianelda/lexis/tsx-tailwind";
import tsParser from "@typescript-eslint/parser";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      ".next/",
      "node_modules/",
      "out/",
      "dist/",
      "coverage/",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "public/",
      ".env*",
    ],
  },
  ...tailwind,
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/tailwind.css",
        tsconfig: "tsconfig.json",
      },
    },
  },
  ...lexis,
]);
