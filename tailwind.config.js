/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Montserrat", "sans-serif"],
        'cool': ["Coolvetica", "sans-serif"],
        },
      },
  },
  plugins: [],
}

