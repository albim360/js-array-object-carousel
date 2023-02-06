const images = [
{src: './img/01.jpg', alt: 'Immagine 1'},
{src: './img/02.jpg', alt: 'Immagine 2'},
{src: './img/03.jpg', alt: 'Immagine 3'},
{src: './img/04.jpg', alt: 'Immagine 3'},
{src: './img/05.jpg', alt: 'Immagine 3'},
];

// QUESTO CODICE VA INTEGRATO SE TOGLIAMO GLI ELEMENTI DALL'HTML PER CREARE LE SLIDE CON LE IMMAGINI DA JS

// // Creiamo gli elementi slide con le immagini
// for (let i = 0; i < images.length; i++) {
// const imgElement = document.createElement('img');
// imgElement.src = images[i].src;
// imgElement.alt = images[i].alt;
// const slide = document.createElement('div');
// slide.classList.add('slide');
// slide.appendChild(imgElement);
// document.body.appendChild(slide);

// console.log(i)
// }

// Selezioniamo tutti gli elementi slide e aggiungiamo animazione alla loro comparsa
const slides = document.querySelectorAll('.slide');

// Indice corrente del carosello
let current = 0;

// Funzione per mostrare lo slide successivo
function nextSlide() {
// Rimuoviamo la classe active dallo slide corrente
slides[current].classList.remove('active');
// Incrementiamo l'indice corrente
current = (current + 1) % slides.length;
// Aggiungiamo animazione alla comparsa dello slide successivo
slides[current].style.transition = "opacity 0.5s ease-in-out";
slides[current].style.opacity = 0;
setTimeout(function() {
    slides[current].style.opacity = 1;
}, 100);
// Aggiungiamo la classe active allo slide successivo
slides[current].classList.add('active');
}

// Funzione per mostrare lo slide precedente
function prevSlide() {
// Rimuoviamo la classe active dallo slide corrente
slides[current].classList.remove('active');
// Decrementiamo l'indice corrente, se è 0 lo impostiamo come l'ultimo elemento della lista di slide
current = (current - 1 + slides.length) % slides.length;
// Aggiungiamo animazione alla comparsa dello slide precedente
slides[current].style.transition = "opacity 0.5s ease-in-out";
slides[current].style.opacity = 0;
setTimeout(function() {
    slides[current].style.opacity = 1;
}, 100);
// Aggiungiamo la classe active allo slide precedente
slides[current].classList.add('active');
}

console.log(slides)

// Selezioniamo la freccia sinistra
const arrowLeft = document.querySelector('.arrow-left');
// Selezioniamo la freccia destra
const arrowRight = document.querySelector('.arrow-right');
// assegniamo la funzione nextSlide all'evento click sulla freccia destra
arrowRight.addEventListener('click', nextSlide);

// assegniamo la funzione prevSlide all'evento click sulla freccia sinistra
arrowLeft.addEventListener('click', prevSlide);