//Menú desplegable

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
const returnToTop = document.querySelector(".main__returnToTop");
let scrollPercentage;

window.addEventListener("load", () => {
  const update = () => {
    scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    percentage.style.width = `${scrollPercentage}%`;
    if (scrollPercentage > 50) {
      returnToTop.style.visibility = "visible";
    } else {
      returnToTop.style.visibility = "hidden";
    }
  };
  update();
  window.addEventListener("scroll", update);
});

//button to top

function handleClick() {
  setTimeout(delay, 200);
}

const delay = () => {
  window.scrollTo({
    top: 0,
  });
};
