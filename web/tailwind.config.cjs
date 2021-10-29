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
      typography : {
          DEFAULT: {
            css : {

              ".footnote-ref": {
                "a" : {
                      "@apply font-sans text-xs text-blue-300":"",                      
                    },
              },
             "a.footnote-backref":{
                "@apply font-sans text-xs text-blue-300":"",    

              },
             /*
              ".hljs" : {
                padding: "9.5px;"
                },
                ".hljs code": {
                whiteSpace: "pre;"
                },
              
              ".checkbox" :{
                marginRight: "10px;"
                },
              
              ".emoji" :{
                height: "1.2em;"
                },
              
               ".footnotes-sep": {
                  "@apply text-sm h-0 box-content mt-5 mb-5":"",
                  color: "#333;",
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif;",
                  lineHeight: "1.42857143;",
                  border: "0;",
                  borderTop: "1px solid #eee;"
                },
              
                ".footnotes": {
                  columnCount: "2;",
                },

                "footnotes-list" :{
                  "@apply list-decimal pl-2":""
                },
              
                ".footnote-ref" : {
                   ">a": {
                  "@apply": "text-blue-800 "
                   }
                },
              
                ".footnote-item" :{
                  "@apply text-red-400":"",
                },
              
                ".footnote-backref": {
                  "@apply text-blue-800 list-decimal pl-2":""
                },

                */
            },
          },       
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
