
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !phone || !email || !message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden', 'd-none');
    confirmation.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
  
    this.reset();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.className = 'back-to-top d-none position-fixed bottom-0 end-0 m-4 btn btn-primary';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('d-none');
    } else {
      backToTopButton.classList.add('d-none');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  