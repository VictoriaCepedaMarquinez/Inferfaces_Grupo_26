let btn = document.querySelector("#button");
    let ul = document.querySelector("#lista_items");
    let content = document.querySelector(".content-ul");
    let header = document.querySelector("#header");
    let nav =document.querySelector("#nav");
    let navDisable = document.querySelector(".navDisable");
    let layer8 = document.querySelector(".layer-8");
    let contentbutton = document.querySelector(".content-button");
    let contentbtn = document.querySelector(".content-btn-comprar");
    let layers = document.querySelectorAll(".layer");
    let contenedor = document.querySelector(".contenedor");

    window.addEventListener("scroll", function() {
        const layer5 = document.querySelector(".layer-5");
        // Verificar si el elemento existe antes de manipularlo
        if (contenedor) {
            if (window.scrollY > 5) { // Cuando el scroll supere 100px
                contenedor.style.transform = `translateX(-50px) translateY(${window.scrollY * 0.5}px)`
            }
        }
        if (this.window.scrollY > 50){
            layer5.classList.add("reducirTamanio"); 
        } else {
            
            layer5.classList.remove("reducirTamanio"); 
        }


        
        layers.forEach((layer, index) => {
            // Calcular un desplazamiento relativo al scroll
            let scrollPos = window.scrollY;
    
            // Movimiento personalizado basado en el índice
            let parallaxSpeed = (index + 0.5) * 0.01; // Capas más profundas se mueven más lento
    
            // Actualizar el estilo "transform" dinámicamente
            layer.style.transform = `translateY(${scrollPos * parallaxSpeed}px)`;
        });
    });

    btn.addEventListener("click", () => {
    
        btn.classList.toggle('active');
    
        ul.classList.toggle('lista_items');
    
        ul.classList.toggle('lista-activa');
    
        content.classList.remove('content-ul');
})


