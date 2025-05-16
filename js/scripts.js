// Service Data
const services = [
    {
        icon: 'cut',
        title: 'Executive Cut',
        description: 'Premium haircut with detailed styling and finishing touches for a polished look.',
        price: '₵200'
    },
    {
        icon: 'cut',
        title: 'Normal Cut',
        description: 'Standard haircut with quality finish to keep you looking fresh and clean.',
        price: '₵100'
    },
    {
        icon: 'air-freshener',
        title: 'Hair Unit',
        description: 'Professional hair unit installation for a natural and seamless look.',
        price: '₵600'
    },
    {
        icon: 'braille',
        title: 'Braids and Cut',
        description: 'Stylish braiding combined with precision cutting for a unique look.',
        price: '₵200'
    },
    {
        icon: 'female',
        title: 'Ladies Cut & Color',
        description: 'Specialized haircut and coloring service for women.',
        price: '₵200'
    }
];

// Gallery Data
const galleryImages = [
    { src: 'images/WhatsApp Image 2025-04-04 at 08.07.33_cb1020b5.jpg', alt: 'Executive cut' },
    { src: 'images/WhatsApp Image 2025-04-04 at 08.07.35_de11464b.jpg', alt: 'Braids' },
    { src: 'images/WhatsApp Image 2025-04-04 at 07.32.04_6609c4ac.jpg', alt: 'Taper fade' },
    { src: 'images/WhatsApp Image 2025-04-04 at 08.07.36_43b11118.jpg', alt: 'Ladies cut' },
    { src: 'images/WhatsApp Image 2025-04-04 at 08.23.26_eba87481.jpg', alt: 'Dangerous cut' }
];

// Testimonials Data
const testimonials = [
    {
        name: 'Eugene K.',
        text: 'Best barber in Accra! Always leaves me looking fresh and clean. Highly recommend the executive cut.',
        rating: 5
    },
    {
        name: 'Big Shot',
        text: 'Consistently great haircuts. The braids and cut combo is my favorite. Worth every cedi!',
        rating: 5
    },
    {
        name: 'Tab Tee.',
        text: 'I love this place! The service is top-notch, and the quality of the hair is outstanding. Will definitely come back again.',
        rating: 4
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Loading screen
    setTimeout(() => {
        document.querySelector('.loader').classList.add('fade-out');
    }, 1500);

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });


    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
     
    // Theme Toggle Functionality
const themeToggle = document.querySelector('.dark-mode-toggle');
const currentTheme = localStorage.getItem('theme') || 
                     window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Apply saved theme or system preference
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));

// Toggle on button click
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Set initial icon
themeToggle.innerHTML = localStorage.getItem('theme') === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'; 

    // Load services
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.setAttribute('data-aos', 'fade-up');
            serviceCard.innerHTML = `
                <div class="service-icon">
                    <i class="fas fa-${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <span class="price">${service.price}</span>
            `;
            servicesGrid.appendChild(serviceCard);
        });
    }

    // Initialize Swiper Gallery
    const gallerySwiper = new Swiper('.gallerySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Load gallery images
    const galleryWrapper = document.querySelector('.gallerySwiper .swiper-wrapper');
    if (galleryWrapper) {
        galleryImages.forEach(image => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            galleryWrapper.appendChild(slide);
        });
    }

    // Initialize Testimonials Swiper
    const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });

    // Load testimonials
    const testimonialsWrapper = document.querySelector('.testimonialsSwiper .swiper-wrapper');
    if (testimonialsWrapper) {
        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <div class="testimonial-card">
                    <div class="rating">
                        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p>"${testimonial.text}"</p>
                    <h4>${testimonial.name}</h4>
                </div>
            `;
            testimonialsWrapper.appendChild(slide);
        });
    }

    // Form enhancements for mobile
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        dateInput.addEventListener('focus', function() {
            this.type = 'date';
        });
    }

    // Service form select
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.title;
            option.textContent = `${service.title} (${service.price})`;
            serviceSelect.appendChild(option);
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});

// Booking form submission
function submitBooking() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !phone || !service || !date || !time) {
        alert("Please fill in all required fields");
        return;
    }

    // Validate Ghana phone number
    const phoneRegex = /^(?:\+233|0)[235]\d{8}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid Ghanaian phone number (e.g., 0557152051 or +233557152051)");
        return;
    }

    // Format phone number for WhatsApp
    const formattedPhone = phone.startsWith('0') ? '+233' + phone.substring(1) : phone;

    // Format time to 12-hour format for better readability
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    const whatsappMsg = `*NEW BOOKING*%0A%0A`
        + `*Name:* ${name}%0A`
        + `*Phone:* ${formattedPhone}%0A`
        + `*Service:* ${service}%0A`
        + `*Date:* ${date}%0A`
        + `*Time:* ${formattedTime}%0A`
        + `*Request:* ${message || 'None'}`;

    window.open(`https://wa.me/+233557152051?text=${whatsappMsg}`, '_blank');
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}