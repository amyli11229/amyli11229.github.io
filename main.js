/**
 * Portfolio scripts — theme toggle + scroll effects + reveals.
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

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = document.querySelector('.nav');
    const root = document.documentElement;
    let lastY = window.scrollY || 0;
    let ticking = false;

    function clamp(n, min, max) {
        return Math.min(max, Math.max(min, n));
    }

    function onScroll() {
        const y = window.scrollY || 0;
        const direction = y > lastY ? 'down' : 'up';
        const viewport = Math.max(1, window.innerHeight || 1);

        // Soft hero parallax / fade over the first ~55% of the viewport
        const t = clamp(y / (viewport * 0.55), 0, 1);
        const ease = t * t * (3 - 2 * t); // smoothstep

        if (!reducedMotion) {
            root.style.setProperty('--hero-blur', (ease * 12).toFixed(2) + 'px');
            root.style.setProperty('--hero-shift', (ease * -36).toFixed(1));
            root.style.setProperty('--hero-fade', ease.toFixed(3));
            root.style.setProperty('--hero-portrait-shift', (ease * -14).toFixed(1));
        } else {
            root.style.setProperty('--hero-blur', '0px');
            root.style.setProperty('--hero-shift', '0');
            root.style.setProperty('--hero-fade', '0');
            root.style.setProperty('--hero-portrait-shift', '0');
        }

        if (nav) {
            nav.classList.toggle('nav--scrolling-down', direction === 'down' && y > 24);
            nav.classList.toggle('nav--scrolling-up', direction === 'up' || y <= 24);
        }

        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint) {
            scrollHint.classList.toggle('scroll-hint--hidden', y > viewport * 0.2);
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

    onScroll();

    const bioReveals = document.querySelectorAll('.bio-reveal');
    if (bioReveals.length > 0) {
        if (reducedMotion) {
            bioReveals.forEach(function(el) {
                el.classList.add('is-visible');
            });
        } else {
            bioReveals.forEach(function(el, index) {
                window.setTimeout(function() {
                    el.classList.add('is-visible');
                }, 140 + index * 120);
            });
        }
    }

    function observeReveals(selector, staggerMs) {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return;

        if (reducedMotion) {
            elements.forEach(function(el) {
                el.classList.add('is-visible');
            });
            return;
        }

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const index = Number(el.getAttribute('data-reveal-index') || 0);
                window.setTimeout(function() {
                    el.classList.add('is-visible');
                }, index * staggerMs);
                observer.unobserve(el);
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px 15% 0px'
        });

        elements.forEach(function(el, index) {
            el.setAttribute('data-reveal-index', String(index));
            observer.observe(el);
        });
    }

    observeReveals('.scroll-reveal', 80);
    observeReveals('.projects-home .project-card', 90);

    // Projects page / other lists: gentle rise without fighting homepage styles
    const otherCards = document.querySelectorAll('.projects-page .project-card');
    if (otherCards.length > 0) {
        if (reducedMotion) {
            otherCards.forEach(function(card) {
                card.classList.add('is-visible');
            });
        } else {
            otherCards.forEach(function(card, index) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(16px)';
                card.style.transition = 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
                card.style.transitionDelay = (index * 0.06) + 's';
            });

            const listObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    listObserver.unobserve(entry.target);
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

            otherCards.forEach(function(card) {
                listObserver.observe(card);
            });
        }
    }
});
