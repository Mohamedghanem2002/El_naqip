const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  ease: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });

sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {
  delay: 200,
  origin: "bottom",
});

let modalImg = document.querySelector(".modal-content");
let modeal = document.getElementById("myModal");
let close = document.querySelector(".close");
let captionText = document.getElementById("caption");
let imgs = document.querySelectorAll(".imags");

Array.from(imgs).forEach((img) => {
  img.onclick = function () {
    modalImg.src = this.src;
    modeal.style.display = "block";
    captionText.innerHTML = this.alt;
  };
});
close.onclick = function () {
  modeal.style.display = "none";
};

// Close modal when clicking outside of the image
window.addEventListener("click", function (event) {
  if (event.target === modeal) {
    modeal.style.display = "none";
  }
});

// Close modal when pressing the Escape key
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modeal.style.display === "block") {
    modeal.style.display = "none";
  }
});

// Scroll Top Button logic
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('active', window.scrollY > 150);
});
