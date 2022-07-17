/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin sans",
        walkind: "Walkind",
      },
      colors: {
        green: "#44AD16"
      },
      backgroundImage: {
        hero: "url('./images/family-camping.jpg')",
      },
    },
  },
  plugins: [],
}
