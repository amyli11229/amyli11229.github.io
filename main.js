/**
 * Portfolio scripts — theme, nav, reveals, project back-link.
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
    let ticking = false;

    function onScroll() {
        const y = window.scrollY || 0;
        if (nav) {
            nav.classList.toggle('is-scrolled', y > 8);
        }

        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint) {
            const viewport = Math.max(1, window.innerHeight || 1);
            scrollHint.classList.toggle('scroll-hint--hidden', y > viewport * 0.18);
        }

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
                }, 120 + index * 110);
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
            threshold: 0.12,
            rootMargin: '0px 0px -8% 0px'
        });

        elements.forEach(function(el, index) {
            el.setAttribute('data-reveal-index', String(index));
            observer.observe(el);
        });
    }

    observeReveals('.scroll-reveal', 60);
    observeReveals('[data-featured]', 0);
    observeReveals('.project-detail-body > h2, .project-detail-body > .project-detail-h2, .project-detail-body > .lead', 40);

    const PROJECT_RETURN_KEY = 'projectReturnTo';

    document.querySelectorAll('[data-project-origin]').forEach(function(link) {
        link.addEventListener('click', function() {
            try {
                sessionStorage.setItem(
                    PROJECT_RETURN_KEY,
                    link.getAttribute('data-project-origin') || 'home'
                );
            } catch (e) { /* ignore */ }
        });
    });

    const smartBack = document.querySelector('.project-detail-back[data-smart-back]');
    if (smartBack) {
        var origin = null;
        try {
            origin = sessionStorage.getItem(PROJECT_RETURN_KEY);
        } catch (e) { /* ignore */ }

        if (!origin && document.referrer) {
            try {
                var ref = new URL(document.referrer);
                if (ref.origin === window.location.origin) {
                    if (/projects\.html$/i.test(ref.pathname)) {
                        origin = 'projects';
                    } else {
                        origin = 'home';
                    }
                }
            } catch (e) { /* ignore */ }
        }

        var assetRoot = smartBack.getAttribute('data-asset-root') || '../';
        if (origin === 'projects') {
            smartBack.setAttribute('href', assetRoot + 'projects.html');
            smartBack.textContent = '← All work';
        } else {
            smartBack.setAttribute('href', assetRoot + 'index.html#work');
            smartBack.textContent = '← Work';
        }
    }
});
