import saludar from "./saludador.js";

const button = document.querySelector("button");
const botonSaludoPorNombre = document.querySelector("#saludo-personalizado");
const botonSaludoPorGenero =document.querySelector("#saludo-genero");
const inputNombre = document.querySelector("#nombre");
const inputGenero =document.querySelector("#genero");
const inputNombreGenero = document.querySelector("#nombre-genero");

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

botonSaludoPorGenero.addEventListener("click", ()=>{
  const genero=inputGenero.value.trim();
  const nombre=inputNombreGenero.value.trim();
  if(nombre,genero){
    alert(`Hola, ${nombre}!, genero: ${genero},`);

  }else{
    alert("Ingrese su nombre y genero: ");
  }
})