//variables
const nav__menu = document.querySelector(".nav__menu");
const nav__menu__menuDesktop = document.querySelector(
  ".nav__menu__menuDesktop"
);
const nav__svg = document.querySelector(".nav__svg");
const nav__logo = document.querySelector(".nav__logo");

nav__svg.addEventListener("click", () => {
  nav__menu__menuDesktop.classList.toggle("menuDown");
  nav__logo.style.display = "block";
});

//modificar la funcion anterior y seguir con los estilos para lograr
//que el down se quede 100%
