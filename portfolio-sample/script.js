document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    gsap.from("#name", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
    gsap.to("#tagline", { opacity: 1, duration: 1, delay: 0.5 });

    // Typing effect for introduction
    const introText = "As a seasoned Cloud Computing Expert, I specialize in architecting robust, scalable, and secure cloud solutions. With a deep understanding of cloud technologies and a passion for innovation, I help businesses leverage the full potential of cloud computing to drive growth and efficiency.";
    const introElement = document.getElementById('intro-text');
    let i = 0;

    function typeWriter() {
        if (i < introText.length) {
            introElement.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }

    // Trigger typing effect when the introduction section is in view
    ScrollTrigger.create({
        trigger: "#introduction",
        start: "top 80%",
        onEnter: typeWriter
    });

    // Skills section animation
    gsap.from(".skill-card", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    });

    // Project showcase animation
    gsap.from(".project-showcase", {
        scrollTrigger: {
            trigger: "#featured-project",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
    });

    // Testimonial animation
    gsap.from(".testimonial-content", {
        scrollTrigger: {
            trigger: "#testimonial",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#main-nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('#main-nav');
        if (window.scrollY > 100) {
            nav.style.background = 'var(--nav-bg)';
        } else {
            nav.style.background = 'transparent';
        }
    });
});

