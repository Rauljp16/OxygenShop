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

const inputName = document.querySelector("#inputName");
const inputMail = document.querySelector("#inputMail");
const sendForm = document.querySelector("#sendForm");
const popupError = document.querySelector("#popupError");
const regexMail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const checkbox = document.querySelector("#checkbox");
let formValid = false;

const validations = () => {
  if (regexMail.test(inputMail.value)) {
    inputMail.classList.remove("error");
  } else {
    inputMail.classList.add("error");
  }

  if (inputName.value.length >= 2 && inputName.value.length <= 100) {
    inputName.classList.remove("error");
  } else {
    inputName.classList.add("error");
  }

  if (checkbox.checked) {
    checkbox.classList.remove("error");
  } else {
    checkbox.classList.add("error");
  }

  if (
    regexMail.test(inputMail.value) &&
    inputName.value.length >= 2 &&
    inputName.value.length <= 100 &&
    checkbox.checked
  ) {
    formValid = true;
  }
};

checkbox.addEventListener("click", function () {
  checkbox.classList.toggle("checkboxCheckImg");
});

const resetForm = () => {
  inputName.value = "";
  inputMail.value = "";
  checkbox.checked = false;
  checkbox.classList.remove("checkboxCheckImg");
  formValid = false;
};

// Mandar datos del for a API de testing

sendForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validations();
  if (formValid === true) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: inputName.value,
        email: inputMail.value,
        consent: checkbox.checked,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    resetForm();
  } else {
    alert("Formulario no valido");
    popupError.classList.add("formError");
  }
});

//popup / modal

const popup = document.querySelector("#popup");
const newsletterTitle = document.querySelector("#newsletterTitle");
const inputNewsletter = document.querySelector("#inputNewsletter");
const formNewsletter = document.querySelector("#formNewsletter");
let formNewsletterValid = false;

window.addEventListener("load", () => {
  sessionStorage.popupStorage = "false";
  if (sessionStorage.popupStorage === "false") {
    setTimeout((load) => {
      popup.style.display = "block";
    }, 5000);

    const update = () => {
      scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (sessionStorage.popupStorage === "false" && scrollPercentage > 25) {
        popup.style.display = "block";
      }
    };
    update();
    window.addEventListener("scroll", update);
  }
});

const closePopup = () => {
  popup.style.display = "none";
  sessionStorage.popupStorage = "true";
};

document.addEventListener("click", (event) => {
  if (!popup.contains(event.target)) {
    closePopup();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

const validationsNewsletter = () => {
  if (regexMail.test(inputNewsletter.value)) {
    formNewsletterValid = true;
    popup.classList.remove("errorInput");
  } else {
    newsletterTitle.textContent = "email no válido";
    inputNewsletter.classList.add("error");
    newsletterTitle.style.color = "red";
  }
};

formNewsletter.addEventListener("submit", function (event) {
  event.preventDefault();
  validationsNewsletter();
  if (formNewsletterValid === true) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        email: inputNewsletter.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    inputNewsletter.value = "";
    formNewsletterValid = false;
    closePopup();
  }
});

//selector de moneda

let dataApiSelector;
let basicEur;
let profesionalEur;
let premiunEur;
let eur;
let usd;
let gbp;

const fetchData = async () => {
  const response = await fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
  );
  const data = await response.json();
  dataApiSelector = data.eur;
};

fetchData().then(() => {
  eur = dataApiSelector.eur;
  usd = dataApiSelector.usd;
  gbp = dataApiSelector.gbp;
  basicEur = 0 / usd;
  profesionalEur = 25 / usd;
  premiunEur = 60 / usd;
});

const clickEur = () => {
  document.getElementById("priceBasic").textContent = `€ ${Math.round(
    basicEur
  )}`;
  document.getElementById("priceProfesional").textContent = `€ ${Math.round(
    profesionalEur
  )}`;
  document.getElementById("pricePremiun").textContent = `€ ${Math.round(
    premiunEur
  )}`;
};

const clickUsd = () => {
  document.getElementById("priceBasic").textContent = `$ ${Math.round(
    basicEur * usd
  )}`;
  document.getElementById("priceProfesional").textContent = `$ ${Math.round(
    profesionalEur * usd
  )}`;
  document.getElementById("pricePremiun").textContent = `$ ${Math.round(
    premiunEur * usd
  )}`;
};

const clickGbp = () => {
  document.getElementById("priceBasic").textContent = `£ ${Math.round(
    basicEur * gbp
  )}`;
  document.getElementById("priceProfesional").textContent = `£ ${Math.round(
    profesionalEur * gbp
  )}`;
  document.getElementById("pricePremiun").textContent = `£ ${Math.round(
    premiunEur * gbp
  )}`;
};
