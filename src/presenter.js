import saludar from "./saludador.js";

const button = document.querySelector("button");
const botonSaludoPorEdad =document.querySelector("#saludo-edad");
const inputNombre = document.querySelector("#nombre");
const inputGenero =document.querySelector("#genero");
const inputEdad=document.querySelector("#edad");


button.addEventListener("click", () => {
  const saludo = saludar();
  alert(saludo); // Muestra el saludo en una alerta
});



botonSaludoPorEdad.addEventListener("click", ()=>{
  const genero=inputGenero.value.trim();
  const nombre=inputNombre.value.trim();
  const edad =inputEdad.value.trim();
  if (nombre && genero && edad) {
    alert(`Hola, ${nombre}!, género: ${genero}, edad: ${edad}`);
  } else {
    alert("Por favor, ingrese su nombre, género y edad.");
  }
})