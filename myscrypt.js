const navElement = document.querySelector('nav');
const spanElements = navElement.querySelectorAll('span');        
const lista = navElement.querySelector('ul');
const liElements = navElement.querySelectorAll('li');

const certificadosFlex = document.querySelector('.certificados-flex');
const mimodalCards = certificadosFlex.querySelectorAll('.mimodal-card');

spanElements.forEach(span => {
  span.addEventListener('click', () => {
    lista.classList.toggle('open');
    spanElements.forEach(span => {
      span.classList.toggle('ocultar');
    });
  });
});

mimodalCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('zoom-card');
  });
});

liElements.forEach((li, index) => {
  li.addEventListener('click', () => {
	lista.classList.toggle('open');
	spanElements.forEach(span => {
      span.classList.toggle('ocultar');
    });
	if ((index + 1) === 1) {
      document.getElementById('id_contactos').scrollIntoView({ behavior: 'smooth' });
    } else if ((index + 1) === 2) {
      document.getElementById('id_servicios').scrollIntoView({ behavior: 'smooth' });
    } else if ((index + 1) === 3) {
      document.getElementById('id_skill').scrollIntoView({ behavior: 'smooth' });
    } else if ((index + 1) === 4) {
      document.getElementById('id_experiencia').scrollIntoView({ behavior: 'smooth' });
    } else if ((index + 1) === 5) {
      document.getElementById('id_certificados').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.acordeon-titulo').forEach(button => {
    button.addEventListener('click', () => {
        const acordeonContenido = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            acordeonContenido.style.maxHeight = acordeonContenido.scrollHeight + 'px';
        } else {
            acordeonContenido.style.maxHeight = 0;
        }
    });
});
