/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        devtrack: {
          teal: '#009488',
          mint: '#CCFFFC',
          navy: '#172554',
          bg: '#0B0F17',
          card: '#111827',
          border: '#1F2937',
          muted: '#9CA3AF'
        }
      }
    },
  },
  plugins: [],
}
