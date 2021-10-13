const slider = document.querySelector("#slider");

slider.classList.remove("show-slider");

const navToggle = document.querySelector(".nav-toggle");
const barBtn = document.querySelector(".fas");
const navLinks = document.querySelector(".navbar-links");
const stickyHeader = document.querySelector(".sticky-header");

navToggle.addEventListener("click", (e) => {
  slider.classList.toggle("show-slider");
  if (barBtn.classList.contains("fa-bars")) {
    barBtn.classList.remove("fa-bars");
    barBtn.classList.add("fa-times");
  } else {
    barBtn.classList.remove("fa-times");
    barBtn.classList.add("fa-bars");
  }
});

window.addEventListener("scroll", function () {
  if (slider.classList.contains("show-slider")) {
    slider.classList.remove("show-slider");
  }
  if (barBtn.classList.contains("fa-times")) {
    barBtn.classList.remove("fa-times");
    barBtn.classList.add("fa-bars");
  }
});

function myFunc() {
  stickyHeader.style.background.color = "black";
}
