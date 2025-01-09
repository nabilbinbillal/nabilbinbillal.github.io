function switchTheme() {
  const currentStyle = currentTheme();
  if (currentStyle === 'light') {
    setTheme('dark');
    setIconTheme('dark');
  } else {
    setTheme('light');
    setIconTheme('light');
  }
}

function setTheme(style) {
  // Remove the initial toggle class to avoid any styling issues
  document.querySelectorAll('.isInitialToggle').forEach(elem => {
    elem.classList.remove('isInitialToggle');
  });

  // Set the theme on the document element
  document.documentElement.setAttribute('data-color-mode', style);

  // Store the theme in localStorage for persistence
  localStorage.setItem('data-color-mode', style);
}

function setIconTheme(theme) {
  const twitterIconElement = document.getElementById('twitter-icon');
  const githubIconElement = document.getElementById('github-icon');

  // Update Twitter icon based on the theme
  if (twitterIconElement) {
    twitterIconElement.setAttribute("fill", theme === 'light' ? "black" : "white");
  }

  // Update GitHub icon based on the theme
  if (githubIconElement) {
    if (theme === 'light') {
      githubIconElement.removeAttribute('color');
      githubIconElement.removeAttribute('class');
    } else {
      githubIconElement.setAttribute('class', 'octicon');
      githubIconElement.setAttribute('color', '#f0f6fc');
    }
  }
}

function currentTheme() {
  // Check if a theme is stored in localStorage, otherwise fall back to system preference
  const localStyle = localStorage.getItem('data-color-mode');
  const systemStyle = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return localStyle || systemStyle;
}

(() => {
  // Initialize the theme based on the stored or system preference
  setTheme(currentTheme());
  setIconTheme(currentTheme());
})();

// Listen for changes in the system theme and update the page accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const newTheme = e.matches ? 'dark' : 'light';
  if (!localStorage.getItem('data-color-mode')) {
    setTheme(newTheme);
    setIconTheme(newTheme);
  }
});