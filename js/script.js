// toggle icons navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
            });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon navbar when click on links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//typed js

const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Laravel Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

  // Truncate skill descriptions
  document.querySelectorAll('.skill-summary').forEach(p => {
    const full = p.dataset.fulltext;
    p.textContent = full.length > 200 ? full.substring(0, 200) + '...' : full;
  });

  // Open modal
  function openModal(button) {
    const box = button.closest('.skills-box');
    const title = box.querySelector('h3').innerText;
    const fullText = box.querySelector('.skill-summary').dataset.fulltext;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = fullText;
    document.getElementById('modal').style.display = 'block';
  }

  // Close modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  // Close when clicking outside modal content
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) closeModal();
  };
