const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");

  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

window.sr = ScrollReveal();

sr.reveal(".nav-bar", {
  duration: 1700,
  origin: "top",
  distance: "100px",
});

sr.reveal(".dev-stories", {
  duration: 1900,
  origin: "left",
  distance: "1000px",
});

sr.reveal(".about-us-h4", {
  duration: 1900,
  origin: "left",
  distance: "1000px",
});

sr.reveal(".grid-devCards", {
  duration: 1900,
  origin: "left",
  distance: "1000px",
});

sr.reveal(".container-header", {
  duration: 1900,
  origin: "left",
  distance: "1000px",
});

sr.reveal(".grid-general", {
  duration: 1900,
  origin: "bottom",
  distance: "200px",
});

sr.reveal(".container", {
  duration: 1900,
  origin: "left",
  distance: "1000px",
});

sr.reveal(".iframe", {
  duration: 1900,
  origin: "left",
  distance: "1000px",
});

sr.reveal(".footer", {
  duration: 1700,
  origin: "bottom",
  distance: "500px",
});
