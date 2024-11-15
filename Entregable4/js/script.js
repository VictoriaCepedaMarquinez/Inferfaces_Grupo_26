window.addEventListener("scroll", function() {
    let btn = document.querySelector("button");
    let ul = document.querySelector("#lista_items");
    let content = document.querySelector(".content-nav");
    btn.addEventListener("click", () => {
    btn.classList.toggle('content-transition-btn-activa');
    ul.classList.toggle('lista_items');
    ul.classList.toggle('lista-activa');
    content.classList.remove('content-nav');
})
})