/*En eventos.js agrega un manejador de eventos para el "click" en el div utilizando el método addEventListener. Debes programar que al dar click en el div salga una alerta con el texto "Hola! Soy el div"*/
/*
function Hola(){
    alert ("Hola! soy el div");
} */

    document.addEventListener("DOMContentLoaded", function () {

let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    alert("Hola! soy el div");

});
});