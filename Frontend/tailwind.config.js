/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "poppins",
        titleFont: "Nunito sans",
      },
    },
  },
  plugins: [],
};
