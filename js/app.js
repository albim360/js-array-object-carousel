// selezioniamo tutti gli elementi slide
const slides = document.querySelectorAll('.slide');

// indice corrente del carosello
let current = 0;

// funzione per mostrare lo slide successivo
function nextSlide() {
// rimuoviamo la classe active dallo slide corrente
slides[current].classList.remove('active');
// incrementiamo l'indice corrente
current = (current + 1) % slides.length;
// aggiungiamo la classe active allo slide successivo
slides[current].classList.add('active');
}

// funzione per mostrare lo slide precedente
function prevSlide() {
// rimuoviamo la classe active dallo slide corrente
slides[current].classList.remove('active');
// decrementiamo l'indice corrente, se è 0 lo impostiamo come l'ultimo elemento della lista di slide
current = (current - 1 + slides.length) % slides.length;
// aggiungiamo la classe active allo slide precedente
slides[current].classList.add('active');
}

// selezioniamo la freccia sinistra
const arrowLeft = document.querySelector('.arrow-left');
// selezioniamo la freccia destra
const arrowRight = document.querySelector('.arrow-right');

// assegniamo la funzione nextSlide all'evento click sulla freccia destra
arrowRight.addEventListener('click', nextSlide);

// assegniamo la funzione prevSlide all'evento click sulla freccia sinistra
arrowLeft.addEventListener('click', prevSlide);