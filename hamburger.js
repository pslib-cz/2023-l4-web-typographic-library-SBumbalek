const hamburgerEl = document.querySelector(".hamburger");
const hamburgerListEl = document.querySelector(".Heading__nav-list");

hamburgerEl.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    hamburgerEl.classList.toggle("active");
    hamburgerListEl.classList.toggle("Heading__nav-list--hidden");
}