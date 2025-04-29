document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("darkModeToggle");
    const root = document.documentElement;
    const darkModeKey = 'darkModeEnabled';

    // Function to apply dark mode
    function enableDarkMode() {
        root.style.setProperty("--bg-color", "#1f2937");
        root.style.setProperty("--text-color", "#f0f4f8");
        root.style.setProperty("--nav-color", "#0f172a");
        localStorage.setItem(darkModeKey, 'true');
        if (toggleBtn) {
            toggleBtn.textContent = '☀️'; // Change icon to sun
            toggleBtn.title = 'Toggle Light Mode';
        }
    }

    // Function to disable dark mode
    function disableDarkMode() {
        root.style.setProperty("--bg-color", "#f0f4f8");
        root.style.setProperty("--text-color", "#1f2937");
        root.style.setProperty("--nav-color", "#1e293b");
        localStorage.setItem(darkModeKey, 'false');
        if (toggleBtn) {
            toggleBtn.textContent = '🌓'; // Change icon to moon
            toggleBtn.title = 'Toggle Dark Mode';
        }
    }

    // Check for saved preference on page load
    const isDarkModeEnabled = localStorage.getItem(darkModeKey) === 'true';
    if (isDarkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle dark mode on button click
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const isCurrentlyDarkMode = localStorage.getItem(darkModeKey) === 'true';
            if (isCurrentlyDarkMode) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    const buttons = document.querySelectorAll('.button');
    const closeButtons = document.querySelectorAll('.close-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.style.display = 'flex';
                targetModal.classList.add('fade-in');
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = button.closest('.modal');
            modal.classList.remove('fade-in');
            modal.classList.add('fade-out');

            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('fade-out');
            }, 500);
        });
    });

    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#0d9488" }, // Changed to visible teal
                shape: { type: "circle", stroke: { width: 0 }, polygon: { nb_sides: 5 } },
                opacity: { value: 0.4 },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#0d9488", // Same teal for lines
                    opacity: 0.5,
                    width: 1
                },
                move: { enable: true, speed: 4, out_mode: "out" }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    const fadeInSections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInSections.forEach((section) => observer.observe(section));
});

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }
            ticking = false;
        });
        ticking = true;
    }
});

const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
 // JavaScript to advance carousel on image click/tap
 document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('#certificationCarousel .carousel-inner');
    if (carouselInner) {
        carouselInner.addEventListener('click', function() {
            const carousel = bootstrap.Carousel.getInstance('#certificationCarousel');
            if (carousel) {
                carousel.next();
            }
        });
    }
});