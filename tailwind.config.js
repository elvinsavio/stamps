/* eslint no-use-before-define: 0 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mark: ["Mark", "sans-serif"],
      georgia: ["Georgia", "sans-serif"],
      anvir: ["Anvir", "sans-serif"],
    },
    extend: {
      colors: {
        'primary': '#2F5050',
        'secondary': "#2F3150",
        "black": "#050505;",
        "pale": "#F9F1F1",
        "red-shade": "#F8A888"
      },
      screens: {
        "xsm": "420px", 
      }
    },
  },
  plugins: [],
};
