import lexis from "@julianelda/lexis/react";
import tailwind from "@julianelda/lexis/tsx-tailwind";
import next from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

const eslintConfig = [
  {
    plugins: {
      "@next/next": next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
    },
  },
  ...lexis,
  ...tailwind,
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
  {
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
];

export default eslintConfig;
