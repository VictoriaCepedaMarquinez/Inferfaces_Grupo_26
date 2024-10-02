// Configuración para el carrusel
const track = document.querySelector('.carousel');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// Configuración para el menú hamburguesa
const menuButton = document.querySelector('.close-button');
const menuContent = document.querySelector('.menu-content');

// Ancho de desplazamiento 
const cardWidth = 220; 
let currentPosition = 0; // Posición actual del carrusel

nextButton.addEventListener('click', function() {
    // Mueve a la siguiente posición
    currentPosition -= cardWidth;
    // Se aplica movimiento con transform y transición suave
    track.style.transform = `translateX(${currentPosition}px)`;
    track.style.transition = 'transform 0.4s ease-in-out';
});

prevButton.addEventListener('click', function() {
    // Mueve a la posición anterior
    currentPosition += cardWidth;
    // Se aplica movimiento con transform y transición suave
    track.style.transform = `translateX(${currentPosition}px)`;
    track.style.transition = 'transform 0.4s ease-in-out';
});

menuButton.addEventListener('click', () => {
    // Alterna la clase 'active' en el contenedor del menú
    menuContent.classList.toggle('active');

    // Alterna la clase 'active' en la imagen del botón
    const menuImage = menuButton.querySelector('img');
    menuImage.classList.toggle('active');
});
