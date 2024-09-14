/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // green: "#2D4D43",
      // greenlight: "#8EBDAF",
      // white: "#FAFAFA",
      // "gris-opacity": "#FAF8F799",
      // beige: "#D8CCB5",
      // black: "#131313",
      // gris: "#E4E0DE",
      // "gris-foncé": "#1B1E28",
      // yellow: "#FEDF6F",
      // pureWhite: 'rgb(255,255,255)'
      
      "primary": {
        100: "#2D4D43",
        80: "#8EBDAF",
      },
      "secondary": {
        100: "#FEDF6F",
        90: "#ffea81",
        80: "#FFF0A3",
      },
      "white-variant": "#FAFAFA",
      "pureWhite": "#FFFFFF",
      "beige-variant": "#D8CCB5",
      "black-variant": "#131313",
      "gray": {
        100: "#1B1E28",
        90: "#E4E0DE",
        80: "#FAF8F799",
      },
    },
    fontFamily: {
      "dm-sans-italic": ['"DM Sans Italic"', "sans-serif"],
      "passion-one": ["PassionOne-Regular"],
      "dm-display": ["DMSerifDisplay-Regular"],
      inter: ["Inter"],
      neuton: ["Neuton"],
    },
    extend: {
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 15s linear infinite',
        scrollRight: 'scrollRight 15s linear infinite',
      },
      width: {
        471: "471px",
      },
      height: {
        611: "611px",
      },
    },
  },
  plugins: [],
};
