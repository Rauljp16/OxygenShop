//variables
const header__menu = document.querySelector(".header__menu")
const header__menu__menuDesktop = document.querySelector(".header__menu__menuDesktop")

header__menu.addEventListener("click", () => {
    header__menu__menuDesktop.style.display = "inline-block"
})
// crear section desplegable