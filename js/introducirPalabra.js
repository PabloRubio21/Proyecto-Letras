let letrasIntroducidas="OLAQUETAL";
let contenedor1;
let contenedor2;
let cajas;
let cajas1;
let cajas2;
let letraAux="";
let cajaAuxiliar;
let boton;
let caja1;
let caja2;
let elemento;

/**
 * Crear eventos, alguna variable global, para cargar la pagina y
 * para llamar a las funciones que colocan las letras y el titulo
 */
window.onload=function(){
    contenedor1=document.getElementById("contenedor1");
    cajas1=contenedor1.children;
    contenedor2=document.getElementById("contenedor2");
    cajas2=contenedor2.children;
    caja1=contenedor1.getElementsByClassName("caja");
    caja2=contenedor2.getElementsByClassName("caja");
    boton=document.getElementsByTagName("button")[0];

    if(detectMob()==false){
        // Eventos drag and drop para ordenador
        for (let i = 0; i < caja1.length; i++) {
            caja1[i].addEventListener("dragstart", drag);
            caja1[i].setAttribute("draggable", "true");
            caja1[i].addEventListener("drop", drop);
            caja1[i].addEventListener("dragover", allowDrop);
        }
        
        for (let i = 0; i < caja2.length; i++) {
            caja2[i].addEventListener("dragstart", drag);
            caja2[i].setAttribute("draggable", "true");
            caja2[i].addEventListener("drop", drop);
            caja2[i].addEventListener("dragover", allowDrop);
        }
    }else{
        // Eventos para movil
        contenedor1.addEventListener("click", cogerLetras);
        contenedor2.addEventListener("click", cogerLetras);
        contenedor1.addEventListener("click", colocarLetras);
        contenedor2.addEventListener("click", colocarLetras);
    }

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
                e.target.classList="diseñoCaja";
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
        cajas1[i].classList="caja";
        cajas2[i].classList="caja";
    }
}

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
        ventana="comprobarPalabra.html";
        darPalabra(jugadorTurno, ventana);
    }
}

// Funciones drag and drop
function allowDrop(e){
    e.preventDefault();
}

function drag(e){
    e.dataTransfer.setData("text", e.target.className);
    elemento=e.target;
}

function drop(e){
    var da;
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var datos=document.getElementsByClassName(data);
    for (let i = 0; i < datos.length; i++) {
        if(datos[i]==elemento){
            da=datos[i];
        }
    }
    if(e.target==da){
        
    }else if(e.target.innerHTML!=""){
        var texto=document.createTextNode(da.innerHTML);
        var aux=e.target.innerHTML;
        e.target.innerHTML="";
        e.target.appendChild(texto);
        da.innerHTML=aux;
    }else{
        var texto=document.createTextNode(da.innerHTML);
        e.target.appendChild(texto);
        da.innerHTML="";
    }
}

function detectMob(){
    if(screen.width>=800){
        return false;
    }else{
        return true;
    }
}