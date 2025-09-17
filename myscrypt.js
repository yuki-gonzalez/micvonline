const navElement = document.querySelector('nav');
const spanElements = navElement.querySelectorAll('span');        
const lista = navElement.querySelector('ul');
const liElements = navElement.querySelectorAll('li');

const acordeones_titulo = document.querySelectorAll('.acordeon-titulo')
const acordeones_conten = document.querySelectorAll('.acordeon-contenido')

const certificadosFlex = document.querySelector('.certificados-flex');
const mimodalCards = certificadosFlex.querySelectorAll('.mimodal-card');

const modalElements = document.querySelector('.mimodal-show');
const modalBoton = modalElements.querySelector('button');

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
    modalElements.classList.toggle('abreCierra');
  });
});
/*
modalBoton.addEventListener('click', () => {
	modalElements.classList.toggle('abreCierra');
});
*/

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

acordeones_titulo.forEach((button,index) => {
    button.addEventListener('click', () => {
        //const acordeonContenido = button.nextElementSibling;

        

        if (button.classList.contains('active')) {
			button.classList.toggle('active');
			acordeones_conten[index].style.maxHeight = 0;
            
        } else {
			
			acordeones_titulo.forEach(n => {n.classList.remove('active')});
			acordeones_conten.forEach(n => {n.style.maxHeight = 0;});
			button.classList.toggle('active');
            acordeones_conten[index].style.maxHeight = acordeones_conten[index].scrollHeight + 'px';
        }
    });
});

modalBoton.addEventListener('click', () => {
	modalElements.classList.toggle('abreCierra');
});

// Cuando el usuario hace scroll hacia abajo 400px desde la parte superior de la página, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("goTopBtn").style.display = "block";
    } else {
        document.getElementById("goTopBtn").style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplázate hacia la parte superior de la página
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
