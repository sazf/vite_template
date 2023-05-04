/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#bae6fd",
        secondary: "#7dd3fc",
        terciary: "#60a5fa",
      }),
      textColor: {
        primary: "#bae6fd",
        secondary: "#7dd3fc",
        terciary: "#60a5fa",
      },
      fontFamily:{
        Montserrat: ["Montserrat" ,"sans-serif"],
      }
    },
  },
  plugins: [],
};
