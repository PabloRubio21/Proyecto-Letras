window.onload = function(){
    try{
        document.getElementById("titularGanador").innerHTML
            = `${Jugadores[checkPalabraMasLarga()].nombre} ha ganado`;
    }
    catch (error){
        console.log(error);
        titularGanador.innerHTML = `${checkPalabraMasLarga()}
            <br/>No ha ganado ningún jugador, esta pantalla no debería
            salir en caso de empate o que ningún ganador gane`;        
    }
}