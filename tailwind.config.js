module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        popexbold: ["PopExbold"],
        popmed: ["PopMed"],
        popblack: ["PopBlack"],
        popbold: ["PopBold"],
        poplight: ["PopLight"],
        popsembold: ["PopSembold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
