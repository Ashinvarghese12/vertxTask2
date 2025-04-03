/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '830px',
        'msx': '550px',
        'smx': '500px',
      },
    },
  },
  plugins: [],
}

