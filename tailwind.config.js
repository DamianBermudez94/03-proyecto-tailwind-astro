/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        "White-Name": "hsl(0deg 0% 95.29% / 59.61%)",
        "White-Principal": "hsl(0deg 0% 87.45%)",
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
