// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for responsive navbar
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// JavaScript for form validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// JavaScript for image slider (Optional)
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.portfolio-item img');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize the image slider
document.addEventListener('DOMContentLoaded', showSlides);
