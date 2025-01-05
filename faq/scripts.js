// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Detect system theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Check saved theme in localStorage or fallback to system theme
const savedTheme = localStorage.getItem('theme') || systemTheme;
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.checked = true;
} else {
    body.classList.remove('dark');
    themeToggle.checked = false;
}

// Toggle theme
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// FAQ Accordion
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.querySelector('h2').addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});

// Social Icons Glow Effect
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const color = getComputedStyle(icon).backgroundColor;
        icon.style.boxShadow = `0 0 10px ${color}`;
        setTimeout(() => {
            icon.style.boxShadow = 'none';
        }, 500);
    });
});

// Back to Home Button
document.querySelector('.back-home').addEventListener('click', () => {
    window.location.href = 'https://nabilbinbillal.github.io';
});