/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        indigo: {
          DEFAULT: '#4453E8',
        },
        violet: {
          DEFAULT: '#8A4FD8',
        },
        coral: {
          DEFAULT: '#F2784A',
        },
      },
    },
  },
  plugins: [],
}
