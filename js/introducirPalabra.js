let letrasIntroducidas="olaquetal";
let contenedor1;
let contenedor2;
let cajas;
let cajas1;
let cajas2;
let letraAux="";
let cajaAuxiliar;
let boton;

/**
 * Crear eventos, alguna variable global, para cargar la pagina y
 * para llamar a las funciones que colocan las letras y el titulo
 */
window.onload=function(){
    contenedor1=document.getElementById("contenedor1");
    cajas1=contenedor1.children;
    contenedor2=document.getElementById("contenedor2");
    cajas2=contenedor2.children;
    boton=document.getElementsByTagName("button")[0];

    // Eventos
    contenedor1.addEventListener("click", cogerLetras);
    contenedor2.addEventListener("click", cogerLetras);
    contenedor1.addEventListener("click", colocarLetras);
    contenedor2.addEventListener("click", colocarLetras);
    boton.addEventListener("click", turnoPalabra);

    agregarLetras(letrasIntroducidas);
    colocarTitulo();
}

/**
 * Coloca el String de letras dentro de las cajas
 * @param {String} string letras sin formar
 */
function agregarLetras(letrasIntroducidas){
    let array=letrasIntroducidas.split("");
    let texto;
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        texto=document.createTextNode(e);
        cajas1[i].appendChild(texto);
    }
}

/**
 * Recoge el evento al hecer click y lo usa para coger el texto de la
 * caja que se selecciona
 * @param {Event} e evento al hacer click
 */
function cogerLetras(e){
    cajas=this.children;
    if(e.target.innerHTML!="" && letraAux==""){
        for (let i = 0; i < cajas.length; i++) {
            if(e.target==cajas[i]){
                letraAux=e.target.innerHTML;
                cajaAuxiliar=cajas[i];
                e.target.innerHTML="";
                this.removeEventListener("click", colocarLetras);
                this.addEventListener("click", colocarLetras);
                e.target.style.backgroundColor="#DDDDDD";
                e.target.style.borderRadius="50%";
                break;
            }
        }
    }
}

/**
 * Coloca la letra en la posicion correspondiente a la caja en la que se
 * haya hecho click, si la caja no estaba vacia y ya contenia una letra,
 * las cambia de posicion
 * @param {Event} e evento al hacer click
 */
function colocarLetras(e){
    let texto;
    cajas=this.children;
    if(e.target.innerHTML==""){
        for (let i = 0; i < cajas.length; i++) {
            if(e.target==cajas[i]){
                texto=document.createTextNode(letraAux);
                e.target.appendChild(texto);
                letraAux="";
                diseño();
                break;
            }
        }
    }else{
        for (let i = 0; i < cajas.length; i++) {
            if(e.target==cajas[i]){
                // Coloco la letra de la posicion final en la posicion inicial
                texto=document.createTextNode(e.target.innerHTML);
                cajaAuxiliar.appendChild(texto);
                e.target.innerHTML="";

                // Coloco la letra de la posicion inicial en la posicion final
                texto=document.createTextNode(letraAux);
                e.target.appendChild(texto);
                letraAux="";
                diseño();
                break;
            }
        }
    }
}

/**
 * Al colocar la letra en su posicion final, las cajas vuelven a su color y
 * con su tamaño inicial
 */
function diseño(){
    for (let i = 0; i < cajas1.length; i++) {
        cajas1[i].style.backgroundColor="white";
        cajas1[i].style.borderRadius="0%";
        cajas2[i].style.backgroundColor="white";
        cajas2[i].style.borderRadius="0%";
    }
}

/**
 * Coge el texto de cada caja y lo convierte a un string
 * @returns la palabra formada a partir de las letras dadas
 */
/**
 * Coge el texto de cada caja y lo convierte a un string y crea el
 * sessionStorage correspondiente
 * @param {String} jugadorTurno turno de cada jugador
 * @param {String} ventana para diferenciar que ventana abrir en cada caso
 */
function darPalabra(jugadorTurno, ventana){
    let array=[];
    for (let i = 0; i < cajas2.length; i++) {
        array.push(cajas2[i].innerHTML);
    }
    let palabra=array.join("");
    if(palabra!=""){
        sessionStorage.setItem(jugadorTurno, palabra);
        window.open(ventana, "_self");
    }
}

/**
 * Coloca el texto del titulo con el nombre del jugador correspondiente
 */
function colocarTitulo(){
    var texto;
    var titulo=document.getElementsByTagName("h1")[0];
    if(sessionStorage.getItem("jugadorPalabra1")==null){
        texto=document.createTextNode(nombreJugador1+" introduce la palabra");
        titulo.appendChild(texto);
    }else if(sessionStorage.getItem("jugadorPalabra2")==null){
        texto=document.createTextNode(nombreJugador2+" introduce la palabra");
        titulo.appendChild(texto);
    }
}

/**
 * Mira si estan creadas las sesiones de las palabras de cada jugador y
 * si no lo estan, las crea y luego abre la siguiente ventana
 */
function turnoPalabra(){
    var jugadorTurno;
    var ventana;
    if(sessionStorage.getItem("jugadorPalabra1")==null){
        jugadorTurno="jugadorPalabra1";
        ventana="introducirPalabra.html";
        darPalabra(jugadorTurno, ventana);
    }else if(sessionStorage.getItem("jugadorPalabra2")==null){
        jugadorTurno="jugadorPalabra2";
        ventana="jugadorLongitud.html";
        darPalabra(jugadorTurno, ventana);
    }
}