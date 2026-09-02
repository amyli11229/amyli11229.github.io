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
    observeReveals('.project-detail-body > h2, .project-detail-body > .project-detail-h2, .project-detail-body > .lead, .project-detail-body > .case-label', 40);

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

    function weekdaySundayFirst(isoDate) {
        var day = new Date(isoDate + 'T00:00:00').getDay();
        return day;
    }

    function renderGithubCalendar(root, days) {
        var cell = 10;
        var gap = 3;
        var step = cell + gap;
        var startPad = days.length ? weekdaySundayFirst(days[0].date) : 0;
        var weeks = Math.ceil((startPad + days.length) / 7);
        var width = weeks * step - gap;
        var height = 7 * step - gap;
        var ns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
        svg.setAttribute('width', String(width));
        svg.setAttribute('height', String(height));
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');

        days.forEach(function(day, index) {
            var slot = startPad + index;
            var x = Math.floor(slot / 7) * step;
            var y = (slot % 7) * step;
            var rect = document.createElementNS(ns, 'rect');
            rect.setAttribute('x', String(x));
            rect.setAttribute('y', String(y));
            rect.setAttribute('width', String(cell));
            rect.setAttribute('height', String(cell));
            rect.setAttribute('rx', '1.5');
            rect.setAttribute('class', 'github-graph-day');
            var level = Number(day.level);
            if (!Number.isFinite(level) || level < 0) level = 0;
            if (level > 4) level = 4;
            rect.setAttribute('data-level', String(level));
            var count = Number(day.count) || 0;
            rect.setAttribute('title', count + ' contribution' + (count === 1 ? '' : 's') + ' on ' + day.date);
            svg.appendChild(rect);
        });

        root.replaceChildren(svg);
    }

    function showGithubChartFallback(root, user) {
        var img = document.createElement('img');
        img.className = 'github-graph-fallback';
        img.alt = 'GitHub contribution graph';
        img.width = 663;
        img.height = 104;
        img.decoding = 'async';
        function setSrc() {
            var dark = document.documentElement.getAttribute('data-theme') === 'dark';
            img.src = 'https://ghchart.rshah.org/' + (dark ? '6a8cff' : '193af6') + '/' + encodeURIComponent(user);
        }
        setSrc();
        root.replaceChildren(img);
        root._githubFallback = setSrc;
    }

    var graphRoot = document.querySelector('[data-github-graph]');
    if (graphRoot) {
        var githubUser = graphRoot.getAttribute('data-github-graph');
        fetch('https://github-contributions-api.jogruber.de/v4/' + encodeURIComponent(githubUser) + '?y=last')
            .then(function(res) {
                if (!res.ok) throw new Error('Could not load contributions');
                return res.json();
            })
            .then(function(data) {
                var days = data.contributions || [];
                if (!days.length) throw new Error('No contributions');
                renderGithubCalendar(graphRoot, days);
            })
            .catch(function() {
                showGithubChartFallback(graphRoot, githubUser);
            });
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            if (graphRoot && typeof graphRoot._githubFallback === 'function') {
                graphRoot._githubFallback();
            }
        });
    }

    document.querySelectorAll('[data-cycle-scroll]').forEach(function(scroller) {
        var wrap = scroller.closest('.case-media-cycle-wrap');
        if (!wrap) return;

        function updateHint() {
            var max = scroller.scrollWidth - scroller.clientWidth;
            wrap.classList.toggle('is-end', max <= 8 || scroller.scrollLeft >= max - 8);
        }

        scroller.addEventListener('scroll', updateHint, { passive: true });
        window.addEventListener('resize', updateHint);
        updateHint();
    });
});
