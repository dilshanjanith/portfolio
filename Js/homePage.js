let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menu.onclick = () => {
  navbar.classList.toggle("open");
};
const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});
sr.reveal(".logo", { delay: 300, origin: "left" });
sr.reveal(".nav-bar", { delay: 600, origin: "top" });

sr.reveal(".home-text span", { delay: 400, origin: "top" });
sr.reveal(".home-text h1", { delay: 600, origin: "left" });
sr.reveal(".home-text p", { delay: 720, origin: "right" });

sr.reveal(".main-btns", { delay: 870, origin: "bottom" });
