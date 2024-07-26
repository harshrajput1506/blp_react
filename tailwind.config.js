/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#102A71",
        secondary: "#001840",
        backgroud: "#FAFAFA",
        secondaryBackground: "#FFFDF0",
      },
    },
  },
  plugins: [],
};
