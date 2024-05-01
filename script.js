//variables
const menu = document.getElementById("menu");
const nav__svg = document.querySelector(".nav__svg");
const nav__logo = document.querySelector(".nav__logo");

const toggleMenu = () => {
  menu.classList.remove("menuDown");
  nav__svg.src = "./svg/Menu.svg";
  nav__svg.style.transform = "rotate(" + -180 + "deg)";
};

nav__svg.addEventListener("click", () => {
  menu.classList.toggle("menuDown");
  if (menu.className != "nav__menu__menuDesktop") {
    nav__svg.src = "./svg/close.svg";
    nav__svg.style.transform = "rotate(" + 180 + "deg)";
  } else {
    nav__svg.src = "./svg/Menu.svg";
    nav__svg.style.transform = "rotate(" + -180 + "deg)";
  }
});
//barra porcentaje de scroll

const percentage = document.getElementById("percentage__scroller");

window.addEventListener("load", () => {
  const update = () => {
    percentage.style.width = `${
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    }%`;
  };
  update();
  window.addEventListener("scroll", update);
});
