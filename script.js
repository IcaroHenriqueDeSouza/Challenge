
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        
        if (answer.style.display === 'block') {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Formulário "Fale Conosco"
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    if (!name || !phone || !email || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
    }


    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');
    confirmation.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;

    
    this.reset();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.className = 'back-to-top hidden';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
