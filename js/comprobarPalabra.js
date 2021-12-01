let jugadorSeleccionado = -1;
let titularGanador;
let titularPalabra;

window.onload = function(){

    titularGanador = document.getElementById("titularGanador");
    titularPalabra = document.getElementById("titularPalabra");

    // Pone el nombre y la palabra del jugador ganador
    try{
        //TODO: Este switch es redundante y se puede simplificar
        switch (checkPalabraMasLarga()){
            case 0:
                jugadorSeleccionado = 0;
                titularPalabra.innerHTML = sessionStorage.getItem("jugadorPalabra1");
                titularGanador.innerHTML = `${sessionStorage.getItem("nombreJugador1")} tiene la palabra mas larga`;
                break;
            case 1:
                jugadorSeleccionado = 1;
                titularPalabra.innerHTML = sessionStorage.getItem("jugadorPalabra2");
                titularGanador.innerHTML = `${sessionStorage.getItem("nombreJugador2")} tiene la palabra mas larga`;
                break;
        }
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
    sessionStorage.setItem(`validoJugador${jugadorSeleccionado+1}`, false);
    if (checkPalabraMasLarga() == 0 || checkPalabraMasLarga() == 1)
        // Gana alguien
        location.reload();
    else
        // Gana nadie, fin del juego
        window.open('hasGanado.html','_self');

}