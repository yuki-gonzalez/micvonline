document.querySelector('h2').addEventListener('click', function() {
	if (this.style.color === 'blue') {
		this.style.color = 'red';
    } else {
        this.style.color = 'blue';
    }
});
const iconContainer = document.querySelector('nav > div');
const spans = iconContainer.querySelectorAll('span');


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