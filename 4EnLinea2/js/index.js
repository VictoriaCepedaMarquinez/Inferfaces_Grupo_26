window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const home = document.querySelector(".home");
    home.style.display="none";


    setTimeout(() => {
        loader.style.display = "none";
        home.style.display = "block";
    }, 5000);
});


const userIcon = document.getElementById('userIcon');
const userMenu = document.getElementById('userMenu');

userIcon.addEventListener('click', () => {

    userMenu.classList.toggle('active');
});

const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menuCategory');


menuIcon.addEventListener('click', () => {

    menu.classList.toggle('active');
});
