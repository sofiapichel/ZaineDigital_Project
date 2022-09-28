let elem = document.querySelector("#Work");
let nav = document.querySelector(".navbar");

function darkMode() {
    var elem = document.querySelector("#Work");
}

window.addEventListener("scroll", () => {

    if (!elem.classList.contains("dark-mode")) {

        if (elem.getBoundingClientRect().top <= 0) {
            nav.classList.add("invert");
        } else {
            nav.classList.remove("invert");
        }
    }
})

let btnDark = document.querySelector("#btn-dark");

btnDark.addEventListener("click", () => {
    elem.classList.toggle("dark-mode");

    if (elem.classList.contains("dark-mode")) {
        btnDark.querySelector("img.darkLightModeimg").setAttribute("src", "../images/home/Sol.svg")
        btnDark.classList.add("lightMode")
    } else {
        btnDark.querySelector("img.darkLightModeimg").setAttribute("src", "../images/home/Luna.svg")
        btnDark.classList.remove("lightMode")

    }


})