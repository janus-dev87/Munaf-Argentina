/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./images/auto-2179220-1920.jpg')",
        "hero-image2": "url('./images/mercedes-benz-841465_1920.jpg')",
      },
      colors: {
        "custom-red": "#c7081b",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
