const track = document.querySelector('.carousel');
const gameCards = document.querySelectorAll('.game-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sectionGames = document.querySelector('.games-section')

let currentIndex = 0;

// Calcula el ancho de cada tarjeta más el margen
const cardWidth = gameCards[0].offsetWidth + parseFloat(getComputedStyle(gameCards[0]).marginRight);

// Número de tarjetas visibles según el ancho del contenedor del carousel
const visibleCards = Math.floor(document.querySelector('.carousel-track').offsetWidth / cardWidth);

// Número total de tarjetas en el carousel
const totalCards = gameCards.length;

// Último índice alcanzable
const maxIndex = totalCards - visibleCards;

nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
});
