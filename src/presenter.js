import saludar from "./saludador.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const saludo = saludar();
  alert(saludo); // Muestra el saludo en una alerta
});
