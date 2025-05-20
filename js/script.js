// Toggle navigation menu for mobile
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Smooth scroll behavior is handled via CSS (scroll-behavior: smooth),
// but we can also add active link highlighting if desired (optional).
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open'); // close menu on link click (for mobile UX)
  });
});

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
faders.forEach(elem => observer.observe(elem));

// Contact form submission handler (placeholder)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
    contactForm.reset();
  });
}
