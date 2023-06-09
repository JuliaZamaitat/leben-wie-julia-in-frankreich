/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
      DEFAULT: {
        css: {
          maxWidth: '70vw', // add required value here
        }
      }
    }
  },
  },
  plugins: [require("@tailwindcss/typography")],
};
