/*Pantalla de carga*/
document.addEventListener("DOMContentLoaded", function () {
    // Simulación de tiempo de carga o espera de la carga del contenido
    setTimeout(function () {
        // Oculta la pantalla de carga
        document.getElementById('loadingScreen').style.display = 'none';
        
        // Muestra el contenido principal
        document.getElementById('mainContent').style.display = 'block';
    }, 3000); // 3 segundos de tiempo de espera simulado

    // Agregar evento al botón para cargar nueva página
    document.getElementById('loadPageButton').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        document.getElementById('loadingScreen').style.display = 'flex'; // Mostrar pantalla de carga

        // Redirigir a la nueva página después de un breve retardo (opcional)
        setTimeout(function () {
            window.location.href = event.target.href; // Navegar a la nueva URL
        }, 3000); // 1 segundo antes de redirigir
    });
});
/*Fin de pantalla de carga*/

const tracks = document.querySelectorAll('.carousel-track'); 
const visibleCards = 3; 

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
        rotateCards('left', carousel);
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
        rotateCards('right', carousel);
    });
});

function rotateCards(direction, carousel) {
    const cards = carousel.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.classList.add('no-pointer-events');
    });
  
    if (direction === 'right') {
        cards.forEach(card => {
            card.classList.add('rotate-right');
        });
    } else {
        cards.forEach(card => {
            card.classList.add('rotate-left');
        });
    }
  
    // Después de un tiempo, volver a la posición original y eliminar las clases de rotación
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('rotate-right', 'rotate-left');
            card.classList.add('reset-rotation'); // Volver a la posición original
        });
  
        // Reactivar los eventos en las tarjetas
        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('reset-rotation', 'no-pointer-events');
            });
        }, 500); // Tiempo de espera para restablecer la rotación
    }, 400); 
  }


// Menú hamburguesa
const menuButton = document.querySelector('.close-button');
const menuContent = document.querySelector('.menu-content');

menuButton.addEventListener('click', () => {
    menuContent.classList.toggle('active');

    const menuImage = menuButton.querySelector('img');
    menuImage.classList.toggle('active');
});

// Card Add


// Seleccionar el botón y las tarjetas
const addToCarButton = document.querySelector('.add-to-car');
const removeFromCarButton = document.querySelector('.remove-from-car');
const cardAdd = document.querySelector('.cardAdd');
const cardAdded = document.querySelector('.cardAdded');
const loadingAnimation = document.querySelector('.loading-animation');

// Añadir un evento de clic al botón "ADD TO CAR"
addToCarButton.addEventListener('click', function() {
    loadingAnimation.style.display = 'block'; // Muestra la animación
    addToCarButton.style.display = 'none'; // Oculta el botón mientras se carga

    // Simula una operación de carga de 1 segundo
    setTimeout(() => {
        cardAdd.style.display = 'none'; // Oculta la tarjeta original
        cardAdded.style.display = 'block'; // Muestra la tarjeta añadida
        loadingAnimation.style.display = 'none'; // Oculta la animación
        addToCarButton.style.display = 'block'; // Vuelve a mostrar el botón
    }, 1000); // Cambia a 1000 ms (1 segundo) como duración de la "carga"
});

// Añadir un evento de clic al botón "ADDED TO CAR"
removeFromCarButton.addEventListener('click', function() {
    cardAdded.style.display = 'none'; // Oculta la tarjeta añadida
    cardAdd.style.display = 'block'; // Muestra la tarjeta original
    addToCarButton.style.display= '';
});



