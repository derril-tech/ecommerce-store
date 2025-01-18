/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Define your custom font
      },
      colors: {
        primary: "#4CAF50", // Define your custom primary color
        secondary: "#FF9800",
      },
    },
  },
  plugins: [],
};
