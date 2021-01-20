/* ### VARIABLES ### */

// Botón hamburguesa
const burger = document.querySelector(".burguer");
// Lista de navegación del header
const nav = document.querySelector(".nav-links");
// Header
// const header = document.querySelector(".main-header");
// Contenedor del header
// const headerContainer = document.querySelector(".header-container");
// Listas del nav
// const listNav = document.querySelector(".li-header"); // Solo toma la primer lista, las otras no (?)

/* ### FUNCIONES ### */

// Abrir el menú de navegación en mobile
burger.addEventListener("click", () => {
  // Se le da la clase de active para hacer un movimiento de la posición absoluta para la transición
  nav.classList.toggle("nav-active");
});

// Si se presiona la tecla ESCAPE se cierra el menú de navegación en mobile
function escPushed() {
  teclaEsc = event.keyCode;
  if (teclaEsc == 27) {
    nav.classList.remove("nav-active");
  }
}

// Si se presiona en alguna parte que no sea el header se cierra el menú de navegación en mobile
// window.addEventListener("click", (e) => {
//   if (nav.classList.contains("nav-active") && e.target !== header && e.target !== headerContainer && e.target !== burger) {
//     nav.classList.remove("nav-active");
//   }
// });

// Inmediatamente que se presione la tecla ESCAPE se cierra el menú de navegación
window.onkeydown = escPushed;

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
