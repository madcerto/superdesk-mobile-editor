/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-primary-1": "#F8FBF8",
        "neutral-primary-2": "#E3EBF2",
        "neutral-primary-4": "#B0BDC1"
      }
    },
  },
  plugins: [],
}
