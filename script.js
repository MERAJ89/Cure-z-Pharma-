document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const yearEl = document.querySelector('#currentYear');
  const contactForm = document.querySelector('#contactForm');
  const successBox = document.querySelector('.form-success');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.textContent = nav.classList.contains('open') ? '×' : '☰';
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name') || 'there';

      if (successBox) {
        successBox.textContent = `Thank you, ${name}! Your inquiry has been sent successfully.`;
        successBox.classList.add('visible');
      }

      contactForm.reset();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
});
