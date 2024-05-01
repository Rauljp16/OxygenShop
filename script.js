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

//validate form

const inputName = document.querySelector("#inputName")
const inputMail = document.querySelector("#inputMail")
const send = document.querySelector("#send")
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const sendForm = () => {
  console.log(`nombre: ${inputName.value} mail:${inputMail.value}`)
  if (regexMail.test(inputMail.value)) {
    alert("¡El correo electrónico es válido!");
  } else {
    alert("¡El correo electrónico no es válido!");
  }
  if (inputName.value.length >= 2 && inputName.value.length <= 100) {
    alert("La longitud  válida.");
  } else {
    alert("El contenido debe tener entre 2 y 100 caracteres.");
  }
}


const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener('click', function () {
  checkbox.classList.toggle("checkboxCheckImg")
  if (checkbox.checked) {
    console.log('El checkbox está marcado.');
  } else {
    console.log('El checkbox no está marcado.');
  }

});