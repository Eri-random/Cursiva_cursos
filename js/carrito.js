$(document).ready(function() {
const comprar = document.querySelectorAll('.boton__compra');

var miStorage = window.localStorage;
var cantidad = miStorage.getItem("cursos");


document.getElementById("cant_carrito").innerHTML = cantidad;


for (var i = 0; i < comprar.length; i++) {
    comprar[i].addEventListener('click', () =>{
    cantidad ++;
    miStorage.setItem("cursos", cantidad);
    document.getElementById("cant_carrito").innerHTML = cantidad;
  });
}


});
