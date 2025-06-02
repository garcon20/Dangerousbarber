// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Simple scroll animation implementation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effects
    const hoverElements = document.querySelectorAll('.hover-scale, .hover-float');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });
});