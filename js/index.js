/**
 * 
 * Pone el color del fondo del botón igual al nombre
 */
let divBoton;
window.onload = function(){
   for(i = 0; i < document.getElementsByClassName("color").length; i++){
      document.getElementsByClassName("color")[i].addEventListener("click", sonido);
   }
   Array.from(document.getElementsByClassName("color")).forEach(element => {
      element.style.background = element.getAttribute("name");
   });
   getColor();
   divBoton=document.getElementById("tiempo");
   divBoton.addEventListener("click", getTiempo);
   sessionStorage.setItem("tiempo", "5");
}

/**
 * Botón "continuar" guarda nombres y color en el sessionStorage
 * y carga elegirPalabra.html
 */
 function continuarElegirPalabra(){
   if (document.getElementById("nombreJ1").value != "")
      sessionStorage.setItem("nombreJugador1", document.getElementById("nombreJ1").value);
   if (document.getElementById("nombreJ2").value != "")
      sessionStorage.setItem("nombreJugador2", document.getElementById("nombreJ2").value);
   window.open("elegirPalabra.html", "_self");
}

let fondo = [sessionStorage.getItem("colorJugador1"), sessionStorage.getItem("colorJugador2")];

function cambiarFondo(event, idJugador){
   fondo = [sessionStorage.getItem("colorJugador1"), sessionStorage.getItem("colorJugador2")];
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


/** Agregar sonido a los botones */
function sonido(){
   let sonido = document.getElementById("botonSonido");
   sonido.setAttribute("src","./sonidos/appear-online.ogg");
   sonido.play();
}

// Botones de tiempo

/**
 * Cuando pulsas un boton de tiempo, guarda el valor del boton en un sessionStorage
 * @param {Event} e evento
 */
 function getTiempo(e){
   let botones=divBoton.children;
   let select="";
   for (let i = 0; i < botones.length; i++) {
      if(botones[i].className!="dark" &&
      e.target.parentElement==botones[i].parentElement){
         botones[i].classList="dark";
      }
      if(botones[i]==e.target){
         if(botones[i].innerHTML=="5s"){
            select=botones[i].innerHTML.substring(0,1);
         }else{
            select=botones[i].innerHTML.substring(0,2);
         }
         sessionStorage.setItem("tiempo", select);
         botones[i].classList="selected";
      }
   }
}