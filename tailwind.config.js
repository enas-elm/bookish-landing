/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
        "gray-variant": {
          100: "#26272b",
          90: "#494a4e",
          80: "#6e6f75",
          70: "#8f9097",
          60: "#b4b5be",
        },
      },
      fontFamily: {
        "dm-sans-italic": ['"DM Sans Italic"', "sans-serif"],
        "passion-one": ["PassionOne-Regular"],
        "dm-display": ["DMSerifDisplay-Regular"],
        inter: ["Inter"],
        neuton: ["Neuton"],
      },
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
