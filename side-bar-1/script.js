
const side_bar = document.querySelector(".side-bar");
const hamburger_menu = document.querySelector(".hamburger-menu");

const note_categories = document.querySelector(".categories-container");
const arrow = document.querySelector(".categories-header .arrow");

const dark_mode = document.querySelector(".bg-color-mode");

hamburger_menu.addEventListener("click", (e) => {
    hamburger_menu.classList.toggle("active");
    side_bar.classList.toggle("hide");
    
    arrow.classList.remove("active");
    note_categories.classList.remove("show");
});

arrow.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    note_categories.classList.toggle("show");
});

dark_mode.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    side_bar.classList.toggle("dark");
});