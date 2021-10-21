module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],

}
