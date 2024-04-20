/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        turmericYellow: "#A08135",
        mehroon: "#800000",
        backgroud: "#FAF8F5",
        secondaryBackground: "#E2D8C1",
      },
    },
  },
  plugins: [],
};
