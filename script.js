document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons that trigger modals and close buttons
    const buttons = document.querySelectorAll('.button');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Add event listeners for open modal buttons
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);  // Get target modal ID
            const targetModal = document.getElementById(targetId);      // Get the modal element
            targetModal.style.display = 'flex';                          // Show modal
            targetModal.classList.add('fade-in');                        // Add fade-in class for animation
        });
    });

    // Add event listeners for close modal buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = button.closest('.modal');  // Find the closest modal element
            modal.classList.remove('fade-in');       // Remove fade-in effect
            modal.classList.add('fade-out');         // Add fade-out effect

            setTimeout(() => {
                modal.style.display = 'none';       // Hide modal after animation
                modal.classList.remove('fade-out'); // Clean up fade-out class
            }, 500); // 500ms should match the CSS animation duration
        });
    });

    // Initialize particles.js for the background effect
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,  // Number of particles
                "density": {
                    "enable": true,
                    "value_area": 800  // Density area
                }
            },
            "color": {
                "value": "#ffffff"  // Particle color
            },
            "shape": {
                "type": "circle"  // Particle shape
            },
            "opacity": {
                "value": 0.5,  // Particle opacity
                "random": true
            },
            "size": {
                "value": 3,  // Particle size
                "random": true
            },
            "line_linked": {
                "enable": true,  // Enable line linking
                "distance": 150, // Distance between particles to link
                "color": "#ffffff",  // Line color
                "opacity": 0.4,  // Line opacity
                "width": 1  // Line width
            },
            "move": {
                "enable": true,  // Enable particle movement
                "speed": 6,  // Particle movement speed
                "direction": "none",  // Random movement direction
                "random": false,
                "straight": false,
                "out_mode": "out",  // Particles will exit the canvas
                "bounce": false
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"  // Repulse particles on hover
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"  // Push new particles on click
                }
            },
            "modes": {
                "repulse": {
                    "distance": 200,  // Repulse distance
                    "duration": 0.4  // Repulse duration
                },
                "push": {
                    "particles_nb": 4  // Number of particles to push
                }
            }
        },
        "retina_detect": true  // Enable retina display
    });
});
