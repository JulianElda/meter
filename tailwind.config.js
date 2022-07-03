/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      mono: "'M PLUS Code Latin'",
      sans: "'M PLUS 1'",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
