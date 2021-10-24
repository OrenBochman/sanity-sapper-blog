const  typography = require("@tailwindcss/typography");
const forms = require('@tailwindcss/forms');
const line_clamp=require('@tailwindcss/line-clamp');
const aspect_ratio=require('@tailwindcss/aspect-ratio');
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
  plugins: [typography,forms,line_clamp,aspect_ratio],

  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],

}
