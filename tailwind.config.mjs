/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientWave: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        progress: 'progress 2s linear infinite', // Animation duration and infinite looping
        'gradient-wave': 'gradientWave 3s ease-in-out infinite', // Gradient animation
      },
      fontFamily: {
        "bootFont": ["bootFont"]
      },
      screens: {
        "xs": "425px",
      },
    },
  },
  plugins: [],
};
