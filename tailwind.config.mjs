/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          fontFamily:{
            "bootFont": ["bootFont"]
          },
          screens:{
            "xs": "425px",
          },
          animation: {
            'gradient-wave': 'gradientWave 3s ease-in-out infinite',
          },
          keyframes: {
            gradientWave: {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          },
        },
        },
    
      }
  },
  plugins: [],
};
