window.addEventListener("load", iniciar);
var color;
var c1;
var c2;
var fondo1 = "";
var fondo2 = "";

function iniciar() {
   color = document.getElementsByClassName("color");
   c1 = document.getElementById("c1");
   c2 = document.getElementById("c2");
   juCaja = document.getElementsByClassName("Ju")[0];
   juCaja2 = document.getElementsByClassName("Ju")[1];
   for (let i = 0; i < color.length; i++) {
      color[i].addEventListener("click", agregarColor);
   }
}

function agregarColor() {
   for (let i = 0; i < color.length; i++) {
      /* Jugador 1 color*/
      if (this == color[i] && this.parentElement == c1) {
         fondo1 = color[i].getAttribute("name");
         break;
      }
      else if (this == color[i] && this.parentElement == c2 ) {
         fondo2 = color[i].getAttribute("name");
         break;
      }
   }
   if(fondo1 != "" && fondo2 == "" ){
      document.body.style.backgroundImage = "linear-gradient(to right, "+ fondo1 +", white)";
   }else if(fondo2 != "" && fondo1 != "" ){
      document.body.style.backgroundImage = "linear-gradient(to right, "+ fondo1 +", "+ fondo2 +")";
   }else if(fondo2 != "" && fondo1 == ""){
      document.body.style.backgroundImage = "linear-gradient(to right, white, "+ fondo2 +")";
   }
   
}