document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality for opening and closing
    const buttons = document.querySelectorAll('.button');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Open modal on button click
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const targetModal = document.getElementById(targetId);
            targetModal.style.display = 'flex';
            targetModal.classList.add('fade-in');
        });
    });

    // Close modal on close button click
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = button.closest('.modal');
            modal.classList.remove('fade-in');
            modal.classList.add('fade-out');

            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('fade-out');
            }, 500); // Delay removal after animation
        });
    });

    // Dark mode toggle functionality
    const toggle = document.getElementById("darkModeToggle");

    // Check and apply saved dark mode preference
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        toggle.textContent = "☀️"; // Change icon to sun for light mode
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Update the button icon and save preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            toggle.textContent = "☀️"; // Sun icon for light mode
            localStorage.setItem("darkMode", "enabled"); // Save light mode preference
        } else {
            toggle.textContent = "🌙"; // Moon icon for dark mode
            localStorage.setItem("darkMode", "disabled"); // Save dark mode preference
        }
    });

    // Back to top button visibility and scroll functionality
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = function () {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none"; // Show button after scrolling 300px
    };

    // Scroll to top when the button is clicked
    backToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize particles.js animation for background effect
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "repulse": { "distance": 200, "duration": 0.4 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });

    // Fade-in animation for sections as they come into view
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of section is visible

    sections.forEach(section => {
        section.classList.add("fade-in-section");
        observer.observe(section); // Observe each section for visibility
    });
});
