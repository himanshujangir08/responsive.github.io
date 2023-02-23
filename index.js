const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}
