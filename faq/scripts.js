// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark');
        themeToggle.checked = false;
    }
}

// Detect system theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check saved theme in localStorage or fallback to system theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(systemTheme.matches ? 'dark' : 'light');
}

// Listen for manual theme toggle
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Listen for system theme changes in real time
systemTheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only auto-switch if no manual override
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// FAQ Accordion
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const faqHeader = faq.querySelector('h2'); // Ensure `h2` exists
    const icon = faq.querySelector('i'); // Font Awesome icon
    const faqContent = faq.querySelector('p'); // The content of the FAQ
    
    if (faqHeader && icon && faqContent) {
        faqHeader.addEventListener('click', () => {
            // Toggle the 'open' class on the FAQ
            faq.classList.toggle('open');
            
            if (faq.classList.contains('open')) {
                faqContent.style.maxHeight = faqContent.scrollHeight + "px"; // Expand content
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up'); // Change icon to 'up' when open
            } else {
                faqContent.style.maxHeight = "0"; // Collapse content
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down'); // Change icon to 'down' when closed
            }
        });
    }
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
const backHomeButton = document.querySelector('.back-home');
if (backHomeButton) {
    backHomeButton.addEventListener('click', () => {
        window.location.href = 'https://nabilbinbillal.github.io';
    });
});