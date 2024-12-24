// Theme Toggle Script
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Function to apply the theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
};

// Check the saved theme in localStorage and apply it on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    // Default theme is light
    applyTheme('light');
}

// Add event listener for theme toggle checkbox
themeSwitch.addEventListener('change', (event) => {
    const theme = event.target.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme); // Store the selected theme in localStorage
});

// FAQ Toggle Script
document.querySelectorAll('.faq h2').forEach((faqHeader) => {
    faqHeader.addEventListener('click', () => {
        const faq = faqHeader.parentElement;
        const paragraph = faq.querySelector('p');
        const icon = faqHeader.querySelector('i');

        // Toggle FAQ visibility with smooth transition
        paragraph.classList.toggle('open');
        
        // Toggle the icon (expand/collapse)
        icon.classList.toggle('fa-chevron-up');
        icon.classList.toggle('fa-chevron-down');

        // Use smooth animation for the paragraph content
        if (paragraph.classList.contains('open')) {
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px'; // Expand to content height
        } else {
            paragraph.style.maxHeight = '0'; // Collapse the content
        }
    });
});