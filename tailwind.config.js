/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //'media'
  content: [
    "./src/**/*.{html,ts}",  
  ],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 8s linear infinite', // تدور ببطء
      },
    },
  },
  plugins: [],
};
