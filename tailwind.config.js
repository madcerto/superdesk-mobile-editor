/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#055C9D1f",
          200: "#055C9D3f",
          300: "#055C9D5f",
          800: "#055C9Dff",
        },
        "secondary-2": "#73BBEE",
        "secondary-3": "#FEF5AC",
        "neutral-primary-1": "#F8FBF8",
        "neutral-primary-2": "#E3EBF2",
        "neutral-primary-3": "#B0BDC1",
        "neutral-primary-4": "#68869A",
        "neutral-secondary-3": "#0C4160"
      }
    },
  },
  plugins: [],
}
