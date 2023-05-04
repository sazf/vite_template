/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#bae6fd",
        secondary: "#67e8f9",
        terciary: "#60a5fa",
      }),
      textColor: {
        primary: "#06b6d4",
        secondary: "#22d3ee",
        terciary: "#60a5fa",
      },
      fontFamily:{
        Montserrat: ["Montserrat" ,"sans-serif"],
      }
    },
  },
  plugins: [],
};
