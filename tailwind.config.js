/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4285f4',
        secondary: '#34a853',
        accent: '#ea4335',
        openai: '#10A37F',
      },
      fontFamily: {
        sans: ['Google Sans', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
