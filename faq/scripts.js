// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
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