const hamburgerEl = document.querySelector(".hamburger");
const hamburgerListEl = document.querySelector(".Heading_nav-list");

hamburgerEl.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    hamburgerEl.classList.toggle("active");
    hamburgerListEl.classList.toggle("Heading_nav-list--hidden");
}