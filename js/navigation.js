/* ==========================================================================
   SPA-Portfolio: Navigation & Mobile Menu Logic
   (js/navigation.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const header = document.querySelector('header');

    const closeMenu = () => {
        if (!navLinks) return;
        navLinks.classList.remove('nav-active');
        if (burger) {
            burger.classList.remove('toggle');
            burger.setAttribute('aria-expanded', 'false');
        }
        document.body.classList.remove('nav-open');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    };

    const openMenu = () => {
        if (!navLinks) return;
        navLinks.classList.add('nav-active');
        if (burger) {
            burger.classList.add('toggle');
            burger.setAttribute('aria-expanded', 'true');
        }
        document.body.classList.add('nav-open');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    };

    // Toggle Mobile Navigation
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close mobile nav when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    closeMenu();
                }
            });
        });

        document.addEventListener('click', (event) => {
            if (
                navLinks.classList.contains('nav-active') &&
                !navLinks.contains(event.target) &&
                !burger.contains(event.target)
            ) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navLinks.classList.contains('nav-active')) {
                closeMenu();
                burger.focus();
            }
        });
    }

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Close mobile nav if window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('nav-active')) {
            closeMenu();
        }
    });
});

