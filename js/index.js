/**
 * Pone el color del fondo del botón igual al nombre
 */
window.onload = function(){
   Array.from(document.getElementsByClassName("color")).forEach(element => {
      element.style.background = element.getAttribute("name");
   });
}

/**
 * Botón "continuar" guarda nombres y color en el sessionStorage
 * y carga elegirPalabra.html
 */
 function continuarElegirPalabra(){
   sessionStorage.setItem("nombreJugador1", document.getElementById("nombreJ1").innerHTML);
   sessionStorage.setItem("nombreJugador2", document.getElementById("nombreJ2").innerHTML);
   window.open("elegirPalabra.html", "_self");
}

// TODO: Marcar botón seleccionado para cada jugador

let fondo = ["red", "blue"];

function cambiarFondo(event, idJugador){
   fondo[idJugador] = event.target.getAttribute("name");

   sessionStorage.setItem("colorJugador1", fondo[0]);
   sessionStorage.setItem("colorJugador2", fondo[1]);

   setFondo();
}