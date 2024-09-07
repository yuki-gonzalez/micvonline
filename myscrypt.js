document.querySelector('h2').addEventListener('click', function() {
	if (this.style.color === 'blue') {
		this.style.color = 'red';
    } else {
        this.style.color = 'blue';
    }
});
const iconContainer = document.querySelector('nav > div');
const spans = iconContainer.querySelectorAll('span');
const lista = document.querySelector('ul');


console.log(iconContainer);
spans.forEach(span => {
  span.addEventListener('click', () => {
    lista.classList.toggle('open');
    spans.forEach(span => {
      span.classList.toggle('ocultar');
    });
  });
});