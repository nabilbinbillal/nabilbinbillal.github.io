// Theme Toggle Script
const themeSwitch = document.getElementById('theme-switch');

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeSwitch.checked = true;
}

// Toggle theme on checkbox change
themeSwitch.addEventListener('change', () => {
    const isDark = themeSwitch.checked;
    document.body.classList.toggle('dark', isDark);
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// FAQ Toggle Script
document.querySelectorAll('.faq h2').forEach((faqHeader) => {
    faqHeader.addEventListener('click', () => {
        const faq = faqHeader.parentElement;
        faq.classList.toggle('open'); // This toggles the 'open' class for showing/hiding the paragraph
        const icon = faqHeader.querySelector('i');
        // Toggle the icon (expand/collapse)
        icon.classList.toggle('fa-chevron-up');
        icon.classList.toggle('fa-chevron-down');
    });
});