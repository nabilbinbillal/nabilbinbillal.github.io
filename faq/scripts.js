// Theme Switcher Logic
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSwitch.checked = true;
} else {
    body.classList.add('light');
    themeSwitch.checked = false;
}

// Toggle theme on checkbox change
themeSwitch.addEventListener('change', () => {
    const isDark = themeSwitch.checked;
    body.classList.toggle('dark', isDark);
    body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// FAQ Toggle Logic
const faqItems = document.querySelectorAll('.faq h2');

faqItems.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('open');
    });
});