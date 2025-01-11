// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Check saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.checked = true;
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
<<<<<<< HEAD
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
=======
    faq.querySelector('h2').addEventListener('click', () => {
        faq.classList.toggle('open');
    });
>>>>>>> 561ed83 (css)
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
<<<<<<< HEAD
const backHomeButton = document.querySelector('.back-home');
if (backHomeButton) {
    backHomeButton.addEventListener('click', () => {
        window.location.href = 'https://nabilbinbillal.github.io';
    });
});
=======
document.querySelector('.back-home').addEventListener('click', () => {
    window.location.href = 'https://nabilbinbillal.github.io';
});
>>>>>>> 561ed83 (css)
