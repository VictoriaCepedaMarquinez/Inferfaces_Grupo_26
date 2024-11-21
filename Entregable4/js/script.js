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

document.addEventListener("mousemove", (e) => {
    const xOffset = (window.innerWidth / 2 - e.clientX) * 0.01; // Ajusta la intensidad
    const yOffset = (window.innerHeight / 2 - e.clientY) * 0.01;

    const below = document.querySelector(".below");
    if (below) {
        below.style.transform = `translate(${xOffset}px, ${yOffset}px)`; // Solo depende del mouse
    }
});
document.addEventListener("scroll", () => {
    const textItems = document.querySelectorAll(".text-item");
    const dynamicImage = document.getElementById("dynamic-image");

    let selectedImage = null;

    textItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            selectedImage = item.getAttribute("data-image");
        }
    });

    if (selectedImage) {
        dynamicImage.style.backgroundImage = `url(${selectedImage})`;
        dynamicImage.style.opacity = 1; // La imagen se actualiza
    } else {
        dynamicImage.style.opacity = 0; // Ocultar si no hay imagen seleccionada
    }
});


window.addEventListener("scroll", function () {
    const layer5 = document.querySelector(".layer-5");
    
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
