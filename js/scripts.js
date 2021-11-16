let nombreJugador1 = "Jugador1";
let nombreJugador2 = "Jugador2";
let letrasElegidas = sessionStorage.getItem("letrasElegidas");

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