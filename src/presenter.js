import saludar from "./saludador.js";

const button = document.querySelector("button");
const botonSaludoEnEsapaniol =document.querySelector("#saludo-espaniol");
const inputNombre = document.querySelector("#nombre");
const inputGenero =document.querySelector("#genero");
const inputEdad=document.querySelector("#edad");
const selectIdioma = document.querySelector("#idioma");


button.addEventListener("click", () => {
  const saludo = saludar();
  alert(saludo); // Muestra el saludo en una alerta
});

botonSaludoEnEsapaniol.addEventListener("click", ()=>{
  const genero=inputGenero.value.trim();
  const nombre=inputNombre.value.trim();
  const edad =inputEdad.value.trim();
  const idioma=selectIdioma.value;
  if (nombre && genero && edad) {
    if (idioma === "es") {
      alert(`Hola, ${nombre}!, género: ${genero}, edad: ${edad}`);
  } else {
    alert("Por favor, ingrese su nombre, género y edad.");
  }
}
})