import saludar from "./saludador.js";

const botonSaludoEnEsapaniol =document.querySelector("#saludo-espaniol");
const inputNombre = document.querySelector("#nombre");
const inputGenero =document.querySelector("#genero");
const inputEdad=document.querySelector("#edad");
const selectIdioma = document.querySelector("#idioma");


botonSaludoEnEsapaniol.addEventListener("click", ()=>{
  const genero=inputGenero.value.trim();
  const nombre=inputNombre.value.trim();
  const edad =inputEdad.value.trim();
  const idioma=selectIdioma.value;
  if (nombre && genero && edad) {
    if (idioma === "es") {
      alert(`Hola, ${nombre}!, género: ${genero}, edad: ${edad}`);
    } else if (idioma === "en") {
      alert(`Hello, ${nombre}!, gender: ${genero}, age: ${edad}`);
    }
  } else {
    if (idioma === "es") {
      alert("Por favor, ingrese su nombre, género y edad.");
    } else if (idioma === "en") {
      alert("Please enter your name, gender, and age.");
    }
  }
})