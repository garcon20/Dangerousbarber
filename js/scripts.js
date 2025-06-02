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
document.addEventListener('DOMContentLoaded', function() {
    // Gallery images data - you can replace this with an API call if needed
    const galleryImages = [
        {
            src: 'images/WhatsApp Image 2025-04-04 at 07.32.04_6609c4ac.jpg',
            alt: 'Classic haircut by our barber'
        },
        {
            src: 'images/WhatsApp Image 2025-04-04 at 08.07.33_cb1020b5.jpg',
            alt: 'Beard trimming service'
        },
        {
            src: 'images/WhatsApp Image 2025-04-04 at 08.07.35_de11464b.jpg',
            alt: 'Modern fade haircut'
        },
        {
            src: 'images/WhatsApp Image 2025-04-04 at 08.07.36_43b11118.jpg',
            alt: 'Traditional straight razor shave'
        },
        {
            src: 'images/WhatsApp Image 2025-04-04 at 08.23.26_eba87481.jpg',
            alt: 'Braids and fade haircut'


        }
            ]
    
    

    // Get the gallery container
    const galleryContainer = document.querySelector('.gallerySwiper .swiper-wrapper');

    // Create gallery items dynamically
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'swiper-slide';
        
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.loading = 'lazy'; // For better performance
        
        galleryItem.appendChild(imgElement);
        galleryContainer.appendChild(galleryItem);
    });

    // Initialize Swiper
    const gallerySwiper = new Swiper('.gallerySwiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        grabCursor: true,
        effect: 'slide', // You can change to 'fade', 'cube', etc.
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Refresh Swiper after images load to prevent calculation issues
    const images = document.querySelectorAll('.gallerySwiper img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
        }
    });
    
    function imageLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            gallerySwiper.update();
        }
    }
});
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
        once: true,
        offset: 100
    });

    // Loading screen
    setTimeout(() => {
        document.querySelector('.loader').classList.add('fade-out');
    }, 2000);

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
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Apply saved theme or system preference
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Toggle on button click
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Set initial icon
    themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

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

    // Load team members
    const teamGrid = document.querySelector('.team-grid');
    if (teamGrid) {
        team.forEach(member => {
            const teamMember = document.createElement('div');
            teamMember.className = 'team-member';
            teamMember.setAttribute('data-aos', 'fade-up');
            teamMember.innerHTML = `
                <div class="team-img">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="team-info">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                    <div class="team-social">
                        <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="${member.social.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            `;
            teamGrid.appendChild(teamMember);
        });
    }

    // Initialize Swiper Gallery
    const gallerySwiper = new Swiper('.gallerySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
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

    // 

    // Initialize Testimonials Swiper
    const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
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

    // Barber form select
    const barberSelect = document.getElementById('barber');
    if (barberSelect) {
        team.forEach(member => {
            const option = document.createElement('option');
            option.value = member.name;
            option.textContent = `${member.name} (${member.role})`;
            barberSelect.appendChild(option);
        });
    }

    // Form enhancements
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        dateInput.addEventListener('focus', function() {
            this.type = 'date';
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon.`);
            
            // Reset form
            this.reset();
        });
    }
});

// Booking form submission
function submitBooking() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const barber = document.getElementById("barber").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value.trim();

    // Simple validation
    if (!name || !phone || !service || !date || !time) {
        alert("Please fill in all required fields");
        return;
    }

    // Validate Ghana phone number
    const phoneRegex = /^(?:\+233|0)[235]\d{8}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid Ghanaian phone number (e.g., 0551234567 or +233551234567)");
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

    const whatsappMsg = `*NEW BOOKING REQUEST*%0A%0A`
        + `*Name:* ${name}%0A`
        + `*Phone:* ${formattedPhone}%0A`
        + `*Service:* ${service}%0A`
        + `*Preferred Barber:* ${barber || 'No preference'}%0A`
        + `*Date:* ${date}%0A`
        + `*Time:* ${formattedTime}%0A`
        + `*Special Requests:* ${notes || 'None'}`;

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