/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Define your custom font
      },
      colors: {
        primary: "#4CAF50", // Define your custom primary color
        secondary: "#FF9800", // Define your custom secondary color
        alertRed: "#FF4C4C", // Added custom red for alert messages
      },
    },
  },
  plugins: [],
};
