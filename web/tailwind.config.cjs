module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'th-primary': 'var(--md-primary)',
        'th-secondary': 'var(--md-secondary)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],

}
