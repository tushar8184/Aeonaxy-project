/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "-2px -2px 7px -3px rgb(238, 238, 238, 0.3)"
      }
    }
  },
  plugins: []
};
