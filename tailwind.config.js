/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        textColor : "#0D0606",
        primary : "#DB1F26",
        secondary : "#2A343B",
        accent :  "#000000"
      }
    },
  },
  plugins: [],
}