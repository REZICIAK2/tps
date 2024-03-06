/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./Sites/**/*.{html,js}", "./components/**/*.{html,js}", "./node_modules/flowbite/**/*.js"], // Zmieniono sposób definiowania ścieżek do zawartości
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};