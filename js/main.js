/**
 * ============================================================================
 * PORTAFOLIO WEB - JUAN DIEGO RODRÍGUEZ
 * Funcionalidades JavaScript nativas (Sin dependencias externas)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dinamismo en el Año del Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Menú Hamburguesa para Móviles
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Cerrar menú al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 3. Estilo Scrolled para la Barra de Navegación
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. ScrollSpy con IntersectionObserver (Resalta el menú activo)
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // 5. Función Copiar Correo al Portapapeles con Toast
    const copyButtons = document.querySelectorAll('.copy-btn');
    const copyToast = document.getElementById('copyToast');
    let toastTimeout = null;

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(textToCopy);
                } else {
                    // Fallback para navegadores antiguos o contextos no seguros
                    const tempInput = document.createElement('input');
                    tempInput.value = textToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }

                // Mostrar notificación Toast
                showToast('¡Correo copiado al portapapeles!');
            } catch (err) {
                console.error('Error al copiar:', err);
                showToast('Error al copiar al portapapeles');
            }
        });
    });

    function showToast(message) {
        if (!copyToast) return;
        copyToast.querySelector('span').textContent = message;
        copyToast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2800);
    }

    // 6. Animación suave de aparición al scrollear (Fade-in sutil)
    const revealElements = document.querySelectorAll('.stat-card, .skill-category-card, .featured-project-card, .cv-card, .contact-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        revealObserver.observe(el);
    });

});
