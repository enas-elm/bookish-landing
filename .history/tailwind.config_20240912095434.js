/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#2D4D43",
      greenlight: "#8EBDAF",
      white: "#FAFAFA",
      beige: "#D8CCB5",
      black: "#131313",
      gris: "#E4E0DE",
      "gris-foncé": "#1B1E28",
      yellow: "#FEDF6F",
      noirClair: "#686C74",
    },
    width: {
      '471','471'
    },
    fontFamily: {
      "dm-sans-italic": ['"DM Sans Italic"', "sans-serif"],
      "passion-one": ["PassionOne-Regular"],
      "dm-display": ["DMSerifDisplay-Regular"],
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};
