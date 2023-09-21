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
        "custom-gray": "rgba(249, 233, 239, 0.4)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "shadow-custom": "rgba(0, 0, 0, 0.3) 0px 0px 5px 0px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
