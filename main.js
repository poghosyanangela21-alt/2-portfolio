const header = document.querySelector(".header");
const burger = document.querySelector(".burger");

function showMenu() {
  header.classList.toggle("header_active");
  burger.classList.toggle("burger_active");
  if (header.matches(".header_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
}
