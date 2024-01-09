/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html",
    "./node_modules/@julianelda/scratchpad/dist/scratchpad.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      serif: "'Heliotrope 3'",
      heading: "'Heliotrope 4'",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
};
