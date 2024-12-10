/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "poppins",
        titleFont: "Nunito sans",
      },
      colors: {
        skyText: "#38bdf8",
        price: '#32BDE8',
        redText: "#ef4444",
        whiteText: "#ffffff",
        darkText: '#1a202c'
      },
    },
  },
  plugins: [],
};
