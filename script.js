/* =====================================================
   VASUDEV NAIR P — PORTFOLIO JAVASCRIPT
   Handles animations, interactions, and UI logic
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== PRELOADER =====
    const preloader = document.getElementById('preloader');
    const triggerHeroAnimations = () => {
        document.querySelectorAll('.animate-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
        });
    };

    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) preloader.classList.add('hidden');
            triggerHeroAnimations();
        }, 600);
    });

    // Fallback: hide preloader after 2.5 seconds regardless
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            triggerHeroAnimations();
        }
    }, 2500);


    // ===== CUSTOM CURSOR =====
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (window.matchMedia('(pointer: fine)').matches && cursorDot && cursorOutline) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = mouseX;
        let outlineY = mouseY;
        let cursorVisible = false;

        document.addEventListener('mousemove', (e) => {
            if (!cursorVisible) {
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
                cursorVisible = true;
            }
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
            cursorVisible = false;
        });

        // Smooth follow for outline
        function animateCursor() {
            outlineX += (mouseX - outlineX) * 0.18;
            outlineY += (mouseY - outlineY) * 0.18;
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effect on interactive elements
        const updateHoverListeners = () => {
            const hoverElements = document.querySelectorAll('a, button, .skill-item, .project-card, .filter-btn, .contact-item, .social-icon');
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
            });
        };
        updateHoverListeners();
    }


    // ===== NAVBAR =====
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect with backdrop blur transition
    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 200;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[data-nav="${sectionId}"]`);

            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();


    // ===== TYPING EFFECT =====
    const typedText = document.getElementById('typed-text');
    if (typedText) {
        const roles = [
            'Full Stack Developer.',
            'Game Developer.',
            'Backend Engineer.',
            'Blockchain Enthusiast.',
            'Cloud Architect.',
            'Creative Problem Solver.'
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 80;

        function typeText() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typedText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 35;
            } else {
                typedText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 75;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                typingSpeed = 2200; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 450; // Pause before typing new role
            }

            setTimeout(typeText, typingSpeed);
        }
        typeText();
    }


    // ===== PARTICLES BACKGROUND =====
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const particleCount = 28;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            const size = Math.random() * 3.5 + 1.5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.animationDuration = Math.random() * 18 + 12 + 's';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.opacity = (Math.random() * 0.45 + 0.15).toString();
            particlesContainer.appendChild(particle);
        }
    }


    // ===== SCROLL REVEAL OBSERVER =====
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));


    // ===== STAT COUNTERS =====
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'), 10);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    statNumbers.forEach(el => statObserver.observe(el));

    function animateCounter(element, target) {
        let current = 0;
        const duration = 1400;
        const steps = 35;
        const increment = target / steps;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
        }, stepTime);
    }


    // ===== PROJECT FILTERS =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    // ===== PROJECT ICON & CARD REPO REDIRECTION =====
    // Ensures clicking the project icon / banner directly redirects to corresponding repo
    projectCards.forEach(card => {
        const repoUrl = card.getAttribute('data-repo');
        if (!repoUrl) return;

        // Ensure icon links and banners work smoothly
        const iconLink = card.querySelector('.project-icon-link');
        if (iconLink) {
            iconLink.setAttribute('href', repoUrl);
            iconLink.setAttribute('target', '_blank');
            iconLink.setAttribute('rel', 'noopener noreferrer');

            iconLink.addEventListener('click', (e) => {
                e.stopPropagation();
                // Browser default anchor handles opening repo in new tab
            });
        }

        // Project banner click fallback
        const banner = card.querySelector('.project-banner');
        if (banner) {
            banner.style.cursor = 'pointer';
            banner.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    window.open(repoUrl, '_blank', 'noopener,noreferrer');
                }
            });
        }
    });


    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 450) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 75;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ===== 3D TILT EFFECT ON PROJECT CARDS =====
    const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (!isTouchDevice()) {
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

});
