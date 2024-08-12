import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,jsx,tsx}",
    "./components/**/*.{ts,jsx,tsx}",
    "./app/**/*.{ts,jsx,tsx}",
    "./src/**/*.{ts,jsx,tsx}",
    "./node_modules/@julianelda/scratchpad/dist/scratchpad.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: "'Heliotrope 3'",
        heading: "'Heliotrope 4'",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
};
export default config;
