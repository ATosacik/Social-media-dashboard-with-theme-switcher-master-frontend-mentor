const themeToggle = document.querySelector('#theme-toggle');

const storeTheme = theme => {
  localStorage.setItem('theme', theme);
  themeToggle.checked = localStorage.getItem('theme') == 'theme-dark';
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) { storeTheme(currentTheme) }

themeToggle.addEventListener('change', () => {
  const theme = themeToggle.checked ? 'theme-dark' : 'theme-light';
  storeTheme(theme);
});