document.addEventListener("DOMContentLoaded", function() {
// Configuración para el carrusel
const tracks = document.querySelectorAll('.carousel'); // Selecciona todos los carruseles
const nextButtons = document.querySelectorAll('.next'); // Selecciona todos los botones "next"
const prevButtons = document.querySelectorAll('.prev'); // Selecciona todos los botones "prev"

// Configuración para el menú hamburguesa
const menuButton = document.querySelector('.close-button');
const menuContent = document.querySelector('.menu-content');

// Ancho de una tarjeta y el contenedor visible
const cardWidth = 300;
const visibleCards = 4; // Número de tarjetas visibles en el carrusel

tracks.forEach((carouselTrack, index) => {
    const totalCards = carouselTrack.querySelector('.conteiner-products').childElementCount; // Total de tarjetas
    const maxPosition = -(totalCards - visibleCards) * cardWidth; // Posición máxima que puede alcanzar el carrusel

    let position = 0; // Posición actual del carrusel
    const nextButton = nextButtons[index];
    const prevButton = prevButtons[index];

    // Botón 'Next' - Mueve hacia la izquierda
    nextButton.addEventListener('click', function() {
        if (position > maxPosition) { 
            position -= cardWidth;
            if (position < maxPosition) { 
                position = maxPosition;
            }
            carouselTrack.style.transform = `translateX(${position}px)`;
            carouselTrack.style.transition = 'transform 0.4s ease-in-out';
        }
    });

    // Botón 'Prev' - Mueve hacia la derecha
    prevButton.addEventListener('click', function() {
        if (position < 0) { 
            position += cardWidth;
            if (position > 0) { 
                position = 0;
            }
            carouselTrack.style.transform = `translateX(${position}px)`;
            carouselTrack.style.transition = 'transform 0.4s ease-in-out';
        }
    });
});

// Menú hamburguesa
menuButton.addEventListener('click', () => {
    // Alterna la clase 'active' en el contenedor del menú
    menuContent.classList.toggle('active');

    // Alterna la clase 'active' en la imagen del botón
    const menuImage = menuButton.querySelector('img');
    menuImage.classList.toggle('active');
});

})


function startLoading() {
    
    const button = document.querySelector('.loading-btn');
    if(button.textContent !== 'ADEDD TO CAR'){
    button.classList.add('loading');
    button.innerHTML = '<span class="spinner"></span>';

    // Simular una acción que tarda 3 segundos en completarse
    setTimeout(() => {
        button.classList.remove('loading');
        button.innerHTML = 'ADEDD TO CAR';
    }, 2000);
}
}

function animateButton() {
    const button = document.querySelector('.slide-btn');
    button.classList.add('active');

    // Después de la animación, quitar la clase para poder repetirla
    setTimeout(() => {
      //  button.classList.remove('active');
        
        // Redirigir a otra página después de que finalice la animación
        window.location.href = "./game.html";  // Cambia la URL por la que quieras
    }, 500);  // Duración de la animación en milisegundos
}

