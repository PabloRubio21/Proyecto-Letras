/**
 * Pone el color del fondo del botón igual al nombre
 */
window.onload = function(){
   Array.from(document.getElementsByClassName("color")).forEach(element => {
      element.style.background = element.getAttribute("name");
   });
   getColor();
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

let fondo = [sessionStorage.getItem("colorJugador1"), sessionStorage.getItem("colorJugador2")];

function cambiarFondo(event, idJugador){
   fondo[idJugador] = event.target.getAttribute("name");

   sessionStorage.setItem("colorJugador1", fondo[0]);
   sessionStorage.setItem("colorJugador2", fondo[1]);

   Jugadores[0].color = sessionStorage.getItem("colorJugador1");
   Jugadores[1].color = sessionStorage.getItem("colorJugador2");
   setFondo();
   getColor(idJugador);

}

// Marcar botón del jugador elegido
let seleccionJ1 = 0;
let seleccionJ2 = 0;

function getColor(idJugador){
   for(let i = 0; i < document.getElementsByClassName("colores").length; i++){

      Array.from(document.getElementsByClassName("colores").item(i).children).forEach(element => {

         element.style.borderColor = "rgba(0, 0, 0, 0.753)";

         if (Jugadores[i].color.toLowerCase() == rgb2hex(element.style.background)){
            element.style.borderColor = "white";
         }

      });
   }
}

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
