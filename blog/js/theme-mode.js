// Toggle theme manually
function switchTheme() {
  const newTheme = currentTheme() === 'light' ? 'dark' : 'light';
  applyTheme(newTheme, true);
}

// Apply the theme to the document
function applyTheme(theme, saveToLocal = false) {
  const root = document.documentElement;

  // Update theme attribute
  root.setAttribute('data-color-mode', theme);

  // Update icons
  updateIcons(theme);

  // Save preference to localStorage if needed
  if (saveToLocal) {
    localStorage.setItem('data-color-mode', theme);
  }

  // Apply smooth transition for user-friendly feedback
  enableSmoothTransitions();
}

// Update icon styles based on the theme
function updateIcons(theme) {
  const twitterIcon = document.getElementById('twitter-icon');
  const githubIcon = document.getElementById('github-icon');

  if (twitterIcon) {
    twitterIcon.setAttribute('fill', theme === 'light' ? '#000' : '#fff');
  }

  if (githubIcon) {
    if (theme === 'light') {
      githubIcon.removeAttribute('color');
      githubIcon.removeAttribute('class');
    } else {
      githubIcon.setAttribute('class', 'octicon');
      githubIcon.setAttribute('color', '#f0f6fc');
    }
  }
}

// Get the current theme
function currentTheme() {
  const storedTheme = localStorage.getItem('data-color-mode');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return storedTheme || systemTheme;
}

// Automatically apply the system theme if no user preference is set
function applySystemTheme() {
  if (!localStorage.getItem('data-color-mode')) {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(systemTheme);
  }
}

// Add smooth transitions to theme changes
function enableSmoothTransitions() {
  const root = document.documentElement;
  root.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  setTimeout(() => {
    root.style.transition = ''; // Clear transition to avoid conflicts
  }, 400);
}

// Initialize theme on page load
(function initializeTheme() {
  const theme = currentTheme();
  applyTheme(theme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('data-color-mode')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
    }
  });
})();