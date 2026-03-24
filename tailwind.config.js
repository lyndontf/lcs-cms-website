/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#229CD0',
          50: '#e6f4fa',
          100: '#cce9f5',
          200: '#99d3eb',
          300: '#66bde0',
          400: '#33a7d6',
          500: '#229CD0',
          600: '#1b7faa',
          700: '#166283',
          800: '#10445d',
          900: '#0b2736',
        },
        secondary: {
          DEFAULT: '#09B7D3',
          50: '#E6F9FC',
          500: '#09B7D3',
          600: '#0792A8',
        },
        gold: {
          DEFAULT: '#FAB515',
          50: '#FEF7E6',
          500: '#FAB515',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
