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
        titularGanador.innerHTML = `No ha ganado ningún jugador, esta pantalla no debería
            salir en caso de empate o ningún ganador`;
        titularPalabra.innerHTML = `Error`;
        
    }
    
}

function palabraCorrecta(){
    // TODO: Carga la pantalla de victoria
}

function palabraIncorrecta(){
    // TODO: Marca la palabra del jugador como inválida
    // Jugadores[jugadorSeleccionado].isPalabraValida = false;
}