// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

 const text = "Social Media Manager.";
    const typingDiv = document.getElementById("typing");
    let index = 0;

    function type() {
      if (index < text.length) {
        typingDiv.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // typing speed
      }
    }

    type();
// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Form submission handling
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    // The form will handle mailto: naturally
    // This is just for any additional handling if needed
    console.log('Form submitted');
});

// Add loading state to form button
const submitBtn = form.querySelector('.btn-primary');
form.addEventListener('submit', function() {
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Reset after a delay (since mailto opens email client)
    setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }, 2000);
});