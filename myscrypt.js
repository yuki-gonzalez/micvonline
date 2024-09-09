const navElement = document.querySelector('nav');
const spanElements = navElement.querySelectorAll('span');        
const lista = navElement.querySelector('ul');

spanElements.forEach(span => {
  span.addEventListener('click', () => {
    lista.classList.toggle('open');
    spanElements.forEach(span => {
      span.classList.toggle('ocultar');
    });
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
