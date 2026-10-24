/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        devtrack: {
          teal: '#009488',
          mint: '#CCFFFC',
          navy: '#172554',
          bg: 'var(--devtrack-bg)',
          card: 'var(--devtrack-card)',
          border: 'var(--devtrack-border)',
          muted: 'var(--devtrack-muted)'
        }
      }
    },
  },
  plugins: [],
}
