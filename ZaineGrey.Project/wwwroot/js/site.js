let sectionWork = document.querySelector("#Work");
let nav = document.querySelector(".navbar");
let btnUp = document.querySelector(".position-fixed-btn-up");
let btnSendContact = document.querySelector(".fancy")

window.addEventListener("scroll", () => {

    if (!sectionWork.classList.contains("dark-mode")) {

        if (sectionWork.getBoundingClientRect().top <= 0) {
            nav.classList.add("invert");
            btnUp.classList.add("show");
        } else {
            nav.classList.remove("invert");
            btnUp.classList.remove("show");
        }
    }
})


let btnDark = document.querySelector("#btn-dark");

btnDark.addEventListener("click", () => {
    sectionWork.classList.toggle("dark-mode");

    if (sectionWork.classList.contains("dark-mode") ) {
        btnDark.querySelector("img.darkLightModeimg").setAttribute("src", "../images/home/Sol.svg")
        btnDark.classList.add("lightMode")
        nav.classList.remove("invert");
   
    } else {
        btnDark.querySelector("img.darkLightModeimg").setAttribute("src", "../images/home/Luna.svg")
        btnDark.classList.remove("lightMode")
    }
})