/* ==========================================================================
   SPA-Portfolio: Navigation & Mobile Menu Logic
   (js/navigation.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const header = document.querySelector('header');

    // Toggle Mobile Navigation
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            document.body.style.overflow = navLinks.classList.contains('nav-active') ? 'hidden' : '';
        });

        // Close mobile nav when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    document.body.style.overflow = '';
                }
            });
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
            navLinks.classList.remove('nav-active');
            if (burger) burger.classList.remove('toggle');
            document.body.style.overflow = '';
        }
    });
});

