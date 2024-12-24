// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle logic
    const themeToggle = document.getElementById('theme-switch');
    const body = document.body;

    // Function to toggle theme classes on body
    const toggleTheme = () => {
        if (themeToggle.checked) {
            body.classList.remove('light');
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
        }
    };

    // Initialize theme from localStorage or default to light theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        body.classList.add(storedTheme);
        themeToggle.checked = storedTheme === 'dark';
    } else {
        body.classList.add('light');
    }

    // Set theme toggle on change event
    themeToggle.addEventListener('change', () => {
        toggleTheme();
        localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
    });

    // FAQ Accordion logic
    const faqItems = document.querySelectorAll('.faq h2');

    // Function to toggle FAQ visibility
    const toggleFAQ = (event) => {
        const faq = event.target.closest('.faq');
        faq.classList.toggle('open');
    };

    // Attach event listeners to each FAQ title
    faqItems.forEach(item => {
        item.addEventListener('click', toggleFAQ);
    });

    // Close any FAQ item if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.faq')) {
            document.querySelectorAll('.faq.open').forEach(faq => {
                faq.classList.remove('open');
            });
        }
    });
});