// Configuración para el carrusel
const tracks = document.querySelectorAll('.carousel-track'); // Selecciona todos los tracks
const visibleCards = 3; // Número de tarjetas visibles en el carrusel

tracks.forEach((carouselTrack) => {
    const nextButton = carouselTrack.querySelector('#nextBtn');
    const prevButton = carouselTrack.querySelector('#prevBtn');
    const containerProducts = carouselTrack.querySelector('.conteiner-products');
    
    const carousel = carouselTrack.querySelector('.carousel');
    prevButton.classList.add("none");

    let cardWidth = carousel.querySelector(".card").clientWidth;
    let maxScroll = carousel.scrollWidth - carousel.clientWidth;

    // Botón 'Next' - Mueve hacia la izquierda
    nextButton.addEventListener('click', () => {
        prevButton.classList.remove("none");

        // Si estamos cerca del final, ocultamos el botón 'Next'
        if (carousel.scrollLeft >= (maxScroll - cardWidth * visibleCards)) {
            nextButton.classList.add("none");
        }

        // Desplazamiento suave hacia la derecha
        carousel.scroll({
            left: carousel.scrollLeft + (cardWidth * visibleCards),
            top: 0,
            behavior: 'smooth'
        });
    });

    // Botón 'Prev' - Mueve hacia la derecha
    prevButton.addEventListener('click', () => {
        nextButton.classList.remove("none");

        // Si estamos cerca del inicio, ocultamos el botón 'Prev'
        if (carousel.scrollLeft <= cardWidth * visibleCards) {
            prevButton.classList.add("none");
        }

        // Desplazamiento suave hacia la izquierda
        carousel.scroll({
            left: carousel.scrollLeft - (cardWidth * visibleCards),
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Menú hamburguesa
const menuButton = document.querySelector('.close-button');
const menuContent = document.querySelector('.menu-content');

menuButton.addEventListener('click', () => {
    menuContent.classList.toggle('active');

    const menuImage = menuButton.querySelector('img');
    menuImage.classList.toggle('active');
});
