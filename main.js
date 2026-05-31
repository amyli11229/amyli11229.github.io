/**
 * Portfolio scripts — theme toggle + scroll effects + project card fade-in.
 */
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        function syncThemeToggleUi() {
            const dark = document.documentElement.getAttribute('data-theme') === 'dark';
            themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
            themeBtn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
        }
        syncThemeToggleUi();
        themeBtn.addEventListener('click', function() {
            const dark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (dark) {
                document.documentElement.removeAttribute('data-theme');
                try {
                    localStorage.setItem('theme', 'light');
                } catch (e) { /* ignore */ }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                try {
                    localStorage.setItem('theme', 'dark');
                } catch (e) { /* ignore */ }
            }
            syncThemeToggleUi();
        });
    }

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

        if (nav) {
            nav.classList.toggle('nav--scrolling-down', direction === 'down' && y > 24);
            nav.classList.toggle('nav--scrolling-up', direction === 'up' || y <= 24);
        }

        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint) {
            scrollHint.classList.toggle('scroll-hint--hidden', y > viewport * 0.4);
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

    const bioReveals = document.querySelectorAll('.bio-reveal');
    if (bioReveals.length > 0) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion) {
            bioReveals.forEach(function(el) {
                el.classList.add('is-visible');
            });
        } else {
            bioReveals.forEach(function(el, index) {
                window.setTimeout(function() {
                    el.classList.add('is-visible');
                }, 180 + index * 170);
            });
        }
    }

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
