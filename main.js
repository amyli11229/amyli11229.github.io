// Minimal JavaScript for subtle interactions

// Smooth scroll behavior (already handled by CSS, but adding for compatibility)
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle fade-in animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize cards with hidden state
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Subtle parallax effect for landing page (optional, very minimal)
    const landing = document.querySelector('.landing');
    if (landing) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            if (scrolled < window.innerHeight) {
                landing.style.transform = `translateY(${rate}px)`;
            }
        });
    }
});
