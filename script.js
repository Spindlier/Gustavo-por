// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});





// Typing animation for the about section
const aboutElement = document.querySelector('#about p');

if (aboutElement) {

const aboutText = aboutElement.dataset.text;
let index = 0;

function typeWriter() {
    if (index < aboutText.length) {
        aboutElement.textContent += aboutText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    aboutElement.textContent = '';
    typeWriter();
});

}


// Form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const message = document.querySelector('textarea').value.trim();

        let isValid = true;
        let errorMessage = '';

        // Name validation
        if (name.length < 2) {
            isValid = false;
            errorMessage += 'Nome deve ter pelo menos 2 caracteres.\n';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Email inválido.\n';
        }

        // Message validation
        if (message.length < 10) {
            isValid = false;
            errorMessage += 'Mensagem deve ter pelo menos 10 caracteres.\n';
        }

        if (isValid) {
            alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
            contactForm.reset();
        } else {
            alert('Por favor, corrija os seguintes erros:\n' + errorMessage);
        }
    });
}


// Mobile menu toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'menu-toggle';
mobileMenuToggle.innerHTML = '☰';
mobileMenuToggle.style.display = 'none';

const nav = document.querySelector('nav');
nav.appendChild(mobileMenuToggle);

const navUl = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

function checkScreenSize() {
    if (window.innerWidth <= 768) {
        mobileMenuToggle.style.display = 'block';
    } else {
        mobileMenuToggle.style.display = 'none';
        navUl.classList.remove('show');
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);


// Add some interactive effects
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-10px) scale(1.02)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0) scale(1)';
    });
});


function entrar(){
    window.location.href = "index.html";
}