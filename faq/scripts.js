// Toggle light/dark theme
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check localStorage for preferred theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSwitch.checked = true;
} else {
    body.classList.add('light');
    themeSwitch.checked = false;
}

// Change theme when toggle is clicked
themeSwitch.addEventListener('change', () => {
    const isDark = themeSwitch.checked;
    body.classList.toggle('dark', isDark);
    body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// FAQ toggle functionality
const faqItems = document.querySelectorAll('.faq h2');

faqItems.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('open');
    });
});