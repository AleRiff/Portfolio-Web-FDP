// script.js - Portfolio Yamil
// JavaScript = lo que se mueve / responde al usuario

// 1. Cuando pasas el mouse sobre el titulo, se pone rojo
function cambiarColor(elemento) {
  elemento.style.color = "red";
}

// 2. Cuando sacas el mouse, vuelve a blanco
function restaurarColor(elemento) {
  elemento.style.color = "white";
}

// 3. El boton PRESS START te baja suave hasta Mis Juegos
function irAJuegos() {
  document.getElementById("juegos").scrollIntoView({ behavior: "smooth" });
}
