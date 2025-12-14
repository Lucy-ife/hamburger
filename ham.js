const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

function toggleMenu() {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.addEventListener("click", toggleMenu);
}

 hamburger.addEventListener("click", toggleMenu);