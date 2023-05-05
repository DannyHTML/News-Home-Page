const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-links");
const menuClose = document.querySelector("#menu-close");
const menuLinks = document.querySelectorAll(".nav-links a");

// add a click event listener to the menu toggle button
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});


menuClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

menuLinks.forEach(link => {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  })
})

const headerBackground = "header-background";
const headerCenter = "header-bg-center";
const backgroundTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= backgroundTrigger || window.pageYOffset >= backgroundTrigger) {
    document.getElementById("header").classList.add(headerBackground, headerCenter);
  } else {
    document.getElementById("header").classList.remove(headerBackground, headerCenter);
  }
}