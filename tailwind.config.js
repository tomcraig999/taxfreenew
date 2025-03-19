/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D92027',
          hover: '#C01A20',
        },
        dark: '#333333',
        light: '#F5F5F5',
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(to right, #FF4E00, #FF0000)',
      },
    },
  },
  plugins: [],
}
