// Animación de elementos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Efecto de cambio de header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        }
    });
    
    // Simulación de interacción de botones
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Si es un botón de membresía, mostrar mensaje
            if (this.textContent.includes('Elegir')) {
                e.preventDefault();
                const cardHeader = this.closest('.membership-card').querySelector('.card-header h3').textContent;
                alert(`¡Excelente elección! Has seleccionado la membresía ${cardHeader}. Te contactaremos pronto para completar tu inscripción.`);
            }
        });
    });
    
    // Contador para la oferta especial
    const offerCountdown = () => {
        const offerElement = document.querySelector('.hero-promo strong');
        if (offerElement) {
            // Simular contador de miembros restantes
            let membersLeft = 42;
            setInterval(() => {
                if (membersLeft > 0) {
                    membersLeft--;
                    offerElement.textContent = `OFERTA ESPECIAL - QUEDAN ${membersLeft} CUPOS`;
                }
            }, 60000); 
        }
    };
    
    offerCountdown();
    
    // Efecto de hover mejorado para tarjetas
    document.querySelectorAll('.benefit-card, .highlight-item, .membership-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});
