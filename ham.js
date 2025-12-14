const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.addEventListener("click", toggleMenu);
}

// hamburger.addEventListener("click", toggleMenu);