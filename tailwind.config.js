/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: "'M PLUS Code Latin'",
      sans: "'M PLUS 1'",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
