class Jugador{
    constructor(nombre, palabra, color) {
        this.nombre = nombre;
        this.palabra = palabra;
        this.color = color;
        this.isPalabraValida = true;
    }
}

let Jugadores;

// TODO: Eliminar nombreJugador1 y nombreJugador2 para empezar a usar clases
let nombreJugador1 = "Jugador1";
let nombreJugador2 = "Jugador2";
let letrasElegidas = sessionStorage.getItem("letrasElegidas");

window.addEventListener("load", cargarJuego);

function cargarJuego(){
    // Si no existen las variables del sessionStorage, las crea
    if(sessionStorage.getItem("nombreJugador1") === null) console.log("No existe " + sessionStorage.getItem("nombreJugador1"));
    if(sessionStorage.getItem("nombreJugador1") === null) sessionStorage.setItem("nombreJugador1", "Jugador1");
    if(sessionStorage.getItem("colorJugador1") === null) sessionStorage.setItem("colorJugador1", "#FF00FF");
    if(sessionStorage.getItem("nombreJugador2") === null) sessionStorage.setItem("nombreJugador2", "Jugador2");
    if(sessionStorage.getItem("colorJugador2") === null) sessionStorage.setItem("colorJugador2", "#255DF8");

    Jugadores = [new Jugador(sessionStorage.getItem("nombreJugador1"), "PalabraJ1", sessionStorage.getItem("colorJugador1")),
        new Jugador(sessionStorage.getItem("nombreJugador2"), "PalabraJ2", sessionStorage.getItem("colorJugador2"))];    
    setFondo();
    agregarBurbujas();
}
function setFondo(){
    
    document.body.style.backgroundImage =
        `linear-gradient(-45deg, ${sessionStorage.getItem("colorJugador1")},
         ${sessionStorage.getItem("colorJugador2")})`;
}

/**
 * Abre una ventana en la web de la RAE
 * para comprobar que la palabra existe
 * @param {String} palabra Palabra a buscar
 */
function buscarRae(palabra){
    let raeUrl = `https://dle.rae.es/${palabra}`;
    window.open(raeUrl,'_blank');
}

/**
 * Busca en la RAE el value de un Id
 * @param {String} id Id a buscar
 */
function buscarRaePorIdValue(id){
    let palabra = document.getElementById(id).value;
    buscarRae(palabra);
}

/**
 * Busca en la RAE el InnerHTML
 * @param {String} id Id a buscar
 */
 function buscarRaePorInnerHTML(id){
    let palabra = document.getElementById(id).innerHTML;
    buscarRae(palabra);
}

/**
 * Devuelve un número aleatorio entre dos valores
 * @param min valor mínimo
 * @param max valor máximo
 */
function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Devuelve un valor aleatorio de un array
 * @param miArray array seleccionado
 */
function getRandomFromArray(miArray){
    return miArray[getRandom(0, miArray.length-1)];
}

/**
 * @returns 0, 1 si gana un jugador, "empate" o "ganaNadie"
 */
function checkPalabraMasLarga(){
    let palabraJ1 = sessionStorage.getItem("jugadorPalabra1");
    let palabraJ2 = sessionStorage.getItem("jugadorPalabra2");
    
    if (!Jugadores[0].isPalabraValida && !Jugadores[1].isPalabraValida)
        return "ganaNadie";

    else if (palabraJ1.length == palabraJ2.length
        && Jugadores[0].isPalabraValida && Jugadores[1].isPalabraValida)
        return "empate";

    else if(palabraJ1.length > palabraJ2.length && Jugadores[0].isPalabraValida
        && Jugadores[1].isPalabraValida || !Jugadores[1].isPalabraValida)
        return 0;

    else
        return 1;
}

/**
 * Añade las burbujas al background
 */
function agregarBurbujas(){
    var cont=document.createElement("div");
    var burbuja;
    cont.classList="burbujas";
    for (let i = 0; i < 7; i++) {
        burbuja=document.createElement("div");
        burbuja.classList="burbuja";
        cont.appendChild(burbuja);
    }
    document.body.appendChild(cont);
}

/**
 * Carga el index, y reinicia el sessionStorage
 */
function reiniciarJuego(){
    sessionStorage.clear();
    window.open('index.html','_self');
}