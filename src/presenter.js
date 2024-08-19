import saludar from "./saludador.js";

const button = document.querySelector("button");
const botonSaludoPorNombre = document.querySelector("#saludo-personalizado");
const inputNombre = document.querySelector("#nombre");

button.addEventListener("click", () => {
  const saludo = saludar();
  alert(saludo); // Muestra el saludo en una alerta
});

botonSaludoPorNombre.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  if (nombre) {
    alert(`Hola, ${nombre}!`);
  } else {
    alert("Por favor, escribe tu nombre.");
  }
});