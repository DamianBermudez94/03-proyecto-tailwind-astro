/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        "Color-parrafo": "#F3F3F398",
        "Color-titulo": "#DFDFDF",
        "Violet-text": "hsl(260.15deg 100% 73.14%)",
        "color-input":"#a476ff",
        "Background-body":"#101010",
        'Violet-background': "rgba(164, 118, 255, 0.3)",
        "Background-linea":"#ffffff10",
        "Background-icon" :"#f3f3f310",
        "Background-input":"#1414149c",
        "Color-icon":"#f3f3f398"

      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [],
};
