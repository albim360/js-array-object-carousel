const images = [
    {
      src: './img/01.jpg',
      alt: 'Testo alternativo 1',
      title: 'Titolo slide 1',
      description: 'Descrizione slide 1'
    },
    {
      src: './img/02.jpg',
      alt: 'Testo alternativo 2',
      title: 'Titolo slide 2',
      description: 'Descrizione slide 2'
    },
    {
      src: './img/03.jpg',
      alt: 'Testo alternativo 3',
      title: 'Titolo slide 3',
      description: 'Descrizione slide 3'
    },
    {
      src: './img/04.jpg',
      alt: 'Testo alternativo 4',
      title: 'Titolo slide 4',
      description: 'Descrizione slide 4'
    },
    {
      src: './img/05.jpg',
      alt: 'Testo alternativo 5',
      title: 'Titolo slide 5',
      description: 'Descrizione slide 5'
    }
  ];

const slidesContainer = document.querySelector('.carosello__slides');
slidesContainer.innerHTML = '';

images.forEach(image => {
  const slideContent = `
    <div class="slide">
      <div class="slide__content">
        <h2 class="slide__title">${image.title}</h2>
        <p class="slide__description">${image.description}</p>
      </div>
      <img src="${image.src}" alt="${image.alt}">
    </div>
  `;
  slidesContainer.innerHTML += slideContent;
});

const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].style.transition = "opacity 0.5s ease-in-out";
  slides[current].style.opacity = 0;
  setTimeout(function() {
      slides[current].style.opacity = 1;
  }, 100);
  slides[current].classList.add('active');
}

function prevSlide() {
  slides[current].classList.remove('active');
  current = (current - 1 + slides.length) % slides.length;
  slides[current].style.transition = "opacity 0.5s ease-in-out";
  slides[current].style.opacity = 0;
  setTimeout(function() {
      slides[current].style.opacity = 1;
  }, 100);
  slides[current].classList.add('active');
}

const arrowLeft = document.querySelector('.carosello__arrow.arrow-left');
const arrowRight = document.querySelector('.carosello__arrow.arrow-right');
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
