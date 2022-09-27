let elem = document.querySelector("#Work");
let nav = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (elem.getBoundingClientRect().top <= 0) {
        nav.classList.add("invert");
    } else {
        nav.classList.remove("invert");
    }

})
