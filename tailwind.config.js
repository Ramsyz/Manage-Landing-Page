/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryViolet: "#ee82ee",
        primaryRed: "#FA5959",
        primaryIndigo: "#b54dff",
        primaryGray: "#919442",
        primaryWhite: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
