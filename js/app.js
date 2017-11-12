var personajes = document.querySelectorAll(".personaje");
for (var i = 0; i< personajes.length; i++) {
  personajes[i].addEventListener("click", mostrarInfoPersonaje);
    console.log(this);
}
function mostrarInfoPersonaje() {
  var nombre = this.dataset.nombre;
  var fecha = this.dataset.fecha;
  // console.log(nombre, fecha);

var parrafoInfo = document.createElement("p");

parrafoInfo.classList.add("active");
parrafoInfo.innerText= "Su nombre es " + nombre + " y su primera aparición fuen en "+ fecha;
// console.log(parrafoInfo);
var espacio = document.querySelector(".informacion");
espacio.appendChild(parrafoInfo);
var infoVisible = document.querySelector("p.active");
infoVisible.classList.remove("active");

}
