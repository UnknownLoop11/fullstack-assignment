/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent1: "#f1f2f8",
        accent2: "#a2a4a5",
      },
    },
  },
  plugins: [],
};
