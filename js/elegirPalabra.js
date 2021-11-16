let listaLetras;
let indiceLetra = 0;
let numeroLetras = 9;
let isTurnoJugador1 = 1;
// Cuenta atrás
let isCuentaAtrasIniciada = false;
let contadorSegundos = 0;
let segundosCuentaAtrás = 5; // En segundos

window.onload = function(){
    listaLetras = document.getElementById("listaLetras");
    titularEleccion = document.getElementById("titularEleccion");
    actualizarTitular();
}

/**
 * Si el juego ha terminado, comienza el contador
 * Si no, selecciona una letra
 * @param {string} miEleccion vocal / consonante 
 */
function setLetra(miEleccion){

    if (eleccionHaTerminado()) {
        if (!isCuentaAtrasIniciada)
            cuentaAtras();
        isCuentaAtrasIniciada = true;
        document.getElementById("vocal").style.display = 'none';
        document.getElementById("consonante").style.display = 'none';
    }
    else{
        switch (miEleccion){
            case "vocal":
                listaLetras.children[indiceLetra].innerHTML = getVocal();
                break;
            case "consonante":
                listaLetras.children[indiceLetra].innerHTML = getConsonante();
                break;
        }

        isTurnoJugador1 = !isTurnoJugador1;

        indiceLetra++;
        
        // si la elección ha terminado, se vuelve a llamar para comenzar la cuenta atrás
        if (eleccionHaTerminado()) setLetra();
    }
    actualizarTitular();
}

/**
 * Si la elección ha terminado escribe 'Fin'
 * Si no, escribe el nombre del jugador
 */
function actualizarTitular(){
    if (!eleccionHaTerminado()){
        let textoTitular = isTurnoJugador1 ?
        `Elige ${nombreJugador1}`: `Elige ${nombreJugador2}`;
        titularEleccion.innerHTML = textoTitular;
    }
}

/**
 * @returns Comprueba si ya hemos terminado de elegir todas las fichas
 */
function eleccionHaTerminado(){
    return indiceLetra >= numeroLetras;
}

/**
 * Se llama de forma recursiva cada segundo hasta que termine el tiempo
 */
function cuentaAtras() {
    titularEleccion.innerHTML = `${contadorSegundos} / ${segundosCuentaAtrás}`;

    if (segundosCuentaAtrás >= contadorSegundos){
        setTimeout(function () {
            contadorSegundos++;
            cuentaAtras();
        }, 1000);
    }
    else{
        titularEleccion.innerHTML = `Fin`;
        document.getElementById("continuar").style.display = 'block';
    }
}

/**
 * @returns {string} Vocal aleatoria
 */
function getVocal(){
    const vocales = ["a", "e", "i", "o", "u"];
    return getRandomFromArray(vocales);
}

/**
 * @returns {string} Consonante aleatoria
 */
function getConsonante(){
    const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", 
        "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    return getRandomFromArray(consonantes);
}

function continuarElegirPalabra(){
    let miPalabra = "";
    let miArray = Array.from(listaLetras.children);

    miArray.forEach(element => {
        miPalabra += element.innerHTML;
    });
    
    sessionStorage.setItem("letrasElegidas", miPalabra);
}