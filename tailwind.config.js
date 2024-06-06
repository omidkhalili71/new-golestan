/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "media",
  theme: {
    screens: {
      "mob": "0",
      "pc": "1024px"
    },
    colors: {
      "menu-gray": "#AFB2B4",
      "menu-back": "#2D2D2D",
      "title-red": "#FF0000",
      "title-gray": "#58595B",
      "para-color": "#898989",
    },
    extend: {},
  },
  plugins: [],
};
