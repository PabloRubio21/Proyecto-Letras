let jugadorSeleccionado = -1;
let titularGanador;
let titularPalabra;

window.onload = function(){

    titularGanador = document.getElementById("titularGanador");
    titularPalabra = document.getElementById("titularPalabra");

    // Pone el nombre y la palabra del jugador ganador
    try{
        titularGanador.innerHTML = `${Jugadores[checkPalabraMasLarga()].nombre} tiene la palabra mas larga`;
        titularPalabra.innerHTML = `${Jugadores[checkPalabraMasLarga()].palabra}`;
    }
    catch (error){
        console.log(error);
        titularGanador.innerHTML = `${checkPalabraMasLarga()}
            <br/>No ha ganado ningún jugador, esta pantalla no debería
            salir en caso de empate o que ningún ganador gane`;
        titularPalabra.innerHTML = `Error`;

    }
    
}

/**
 * 
 */
function palabraCorrecta(){
    window.open("hasGanado.html", "_self");
}

function palabraIncorrecta(){
    // TODO: Marca la palabra del jugador como inválida
    // Jugadores[jugadorSeleccionado].isPalabraValida = false;
}