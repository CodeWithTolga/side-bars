const side_bar = document.querySelector(".side-bar");
const hamburger_menu = side_bar.querySelector(".hamburger-menu");
const categories_box = side_bar.querySelector(".categories-box");
const categories_arrow = categories_box.querySelector(".categories-box i.arrow");
const dark_mode = document.querySelector(".sidebar-mode");

hamburger_menu.addEventListener("click", (e) => {
   side_bar.classList.toggle("hide");
   e.target.classList.toggle("active");

   categories_arrow.classList.remove("rotate");
   categories_box.classList.remove("show");
});  

categories_arrow.addEventListener("click", (e) => {
   e.target.classList.toggle("rotate");
   categories_box.classList.toggle("show");
});


dark_mode.addEventListener("click", () => {
  side_bar.classList.toggle("dark");
   dark_mode.classList.toggle("active");
});