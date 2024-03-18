const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-main-menu");
const html = document.querySelector("html");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    html.classList.toggle("active");
});
