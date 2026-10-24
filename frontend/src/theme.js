const themePreference = localStorage.getItem('devtrack-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const startsDark = themePreference ? themePreference === 'dark' : prefersDark;

document.documentElement.classList.toggle('dark', startsDark);

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('[data-theme-toggle]');

  for (const button of toggleButtons) {
    button.setAttribute('aria-pressed', String(startsDark));
    button.setAttribute('aria-label', startsDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', startsDark ? 'Switch to light mode' : 'Switch to dark mode');
    const label = button.querySelector('[data-theme-label]');
    if (label) {
      label.textContent = startsDark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  for (const button of toggleButtons) {
    button.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('devtrack-theme', isDark ? 'dark' : 'light');

      for (const toggle of toggleButtons) {
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        const label = toggle.querySelector('[data-theme-label]');
        if (label) {
          label.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        }
      }
    });
  }
});
