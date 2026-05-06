/**
 * Portfolio scripts — all editable text lives in the HTML files.
 * This file only fades in .project-card elements when they scroll into view.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Scroll effects (vanilla version of “scroll direction” + “blur transform”)
    // - Sets CSS variables for blur amount: --hero-blur (0px → 10px)
    // - Toggles nav classes: .nav--scrolling-up / .nav--scrolling-down
    const nav = document.querySelector('.nav');
    let lastY = window.scrollY || 0;
    let ticking = false;

    function clamp(n, min, max) {
        return Math.min(max, Math.max(min, n));
    }

    function onScroll() {
        const y = window.scrollY || 0;
        const direction = y > lastY ? 'down' : 'up';

        // 0..10px blur over first viewport height (for the hero section background layer)
        const viewport = Math.max(1, window.innerHeight || 1);
        const t = clamp(y / viewport, 0, 1);
        const blurPx = (t * 10).toFixed(2) + 'px';
        document.documentElement.style.setProperty('--hero-blur', blurPx);

        // Fade + slight lift for the big name title in the hero section
        // 1 → 0 over the first ~60% of the viewport scroll
        const tTitle = clamp(y / (viewport * 0.6), 0, 1);
        const opacity = (1 - tTitle).toFixed(3);
        const yPx = (-12 * tTitle).toFixed(2) + 'px';
        document.documentElement.style.setProperty('--hero-title-opacity', opacity);
        document.documentElement.style.setProperty('--hero-title-y', yPx);

        if (nav) {
            nav.classList.toggle('nav--scrolling-down', direction === 'down' && y > 24);
            nav.classList.toggle('nav--scrolling-up', direction === 'up' || y <= 24);
        }

        lastY = y;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(onScroll);
        }
    }, { passive: true });

    // Initialize once on load
    onScroll();

    const projectCards = document.querySelectorAll('.project-card');

    if (projectCards.length > 0) {
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

        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
});
