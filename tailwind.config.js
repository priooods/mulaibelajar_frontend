module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        hasbold: ["HasBold"],
        hasroman: ["HasRoman"],
        hasmedium: ["HasMedium"],
        hasblack: ["HasBlack"],
        haslight: ["HasLight"],
        hasthin: ["HasThin"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
