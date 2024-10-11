document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('#menu-btn');
    const menuContent = document.querySelector('.menu-content');

    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('active');
        menuContent.classList.toggle('active');

    });


    


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


    

    

});

