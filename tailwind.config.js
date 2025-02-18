/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        "White-Name": "#F3F3F398",
        "White-Principal": "#DFDFDF",
        "Violet-text": "hsl(260.15deg 100% 73.14%)",
        "Background-body":"#101010",
        'Violet-background': "rgba(164, 118, 255, 0.3)",
        "Background-linea":"#ffffff10"

      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [],
};
