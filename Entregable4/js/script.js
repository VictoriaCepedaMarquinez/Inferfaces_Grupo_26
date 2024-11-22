let btn = document.querySelector("#button");
let ul = document.querySelector("#lista_items");
let content = document.querySelector(".content-ul");
let header = document.querySelector("#header");
let nav = document.querySelector("#nav");
let navDisable = document.querySelector(".navDisable");
let layer8 = document.querySelector(".layer-8");
let contentbutton = document.querySelector(".content-button");
let contentbtn = document.querySelector(".content-btn-comprar");
let layers = document.querySelectorAll(".layer");
let contenedor = document.querySelector(".contenedor");
const cards = document.querySelectorAll('.card');
const below = document.querySelector('.below');

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;  // Obtiene la posición del scroll
    let personaje = document.querySelector('.contentPersonaje');  // Selecciona el personaje

    // Velocidad de desplazamiento
    let velocidadParallax = 0.1;

    // Desplazamiento en Y, ajustando con la velocidad
    let desplazamiento = scrollPos * velocidadParallax;

    // Aplica el transform para el movimiento en el eje Y
    personaje.style.transform = `translateY(${ -626 + desplazamiento }px)`;
});

document.addEventListener("mousemove", (e) => {
    const xOffset = (window.innerWidth / 2 - e.clientX) * 0.01;
    const yOffset = (window.innerHeight / 2 - e.clientY) * 0.01;

    const below = document.querySelector(".below");
    if (below) {
        below.style.transform = `translate(${xOffset}px, ${yOffset}px)`; // Solo depende del mouse
    }
});


window.addEventListener("scroll", function () {
    const layer5 = document.querySelector(".layer-5");
    fondo5Scroll();
    
    // Movimiento del contenedor
    if (contenedor) {
        if (window.scrollY > 5) {
            contenedor.style.transform = `translateX(-50px) translateY(${window.scrollY * 0.5}px)`
        }
    }

    // Reducir tamaño de layer-5 al hacer scroll
    if (this.window.scrollY > 50) {
        layer5.classList.add("reducirTamanio");
    } else {
        layer5.classList.remove("reducirTamanio");
    }

    // Efecto parallax en las capas
    layers.forEach((layer, index) => {
        let scrollPos = window.scrollY;
        let parallaxSpeed = (index + 0.5) * 0.01;
        layer.style.transform = `translateY(${scrollPos * parallaxSpeed}px)`;
    });

    // Animación de las cards al scrollear
    const triggerPoint = window.innerHeight * 0.9; // Punto de activación (90% de la pantalla)

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            setTimeout(() => {
                card.classList.add('show'); // Agrega la clase para mostrar
            }, index * 300); // Retardo entre cada card
        }
    });
});

// Toggle del menú
btn.addEventListener("click", () => {
    btn.classList.toggle('active');
    ul.classList.toggle('lista_items');
    ul.classList.toggle('lista-activa');
    content.classList.remove('content-ul');
});


function fondo5Scroll() {
    const section = document.querySelector(".fondo5");
    const blocks = section.querySelectorAll('.block');
    const images = section.querySelectorAll('.hidden');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const handleScroll = () => {
        blocks.forEach((block, index) => {
            if (isInViewport(block)) {
                block.classList.add('visible');

                // Resetear todas las imágenes
                images.forEach((img) => img.classList.remove('visible'));

                // Mostrar la imagen correspondiente
                if (images[index]) {
                    images[index].classList.add('visible');
                }
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}




