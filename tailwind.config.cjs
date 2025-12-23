/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
