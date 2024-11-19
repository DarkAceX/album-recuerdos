const track = document.querySelector('.carrusel-track');
const prevButton = document.querySelector('.carrusel-btn.prev');
const nextButton = document.querySelector('.carrusel-btn.next');
const slides = Array.from(track.children);

let currentIndex = 0;

function updateCarrusel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * (slideWidth + 20)}px)`; // Desliza con el margen incluido
}

// Mover a la izquierda
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarrusel();
});

// Mover a la derecha
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrusel();
});
