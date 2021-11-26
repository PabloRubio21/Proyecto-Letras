window.onload = function(){
    let titular = document.getElementById("titularGanador");
    switch (checkPalabraMasLarga()){
        case 0:
        case 1:
            titular.innerHTML = `${Jugadores[checkPalabraMasLarga()].nombre} ha ganado`;
            break;
        case "ganaNadie":
            titular.innerHTML = `Nadie gana, ninguna palabra es válida :(`;
            break;
        case "empate":
            titular.innerHTML = `Empate, ambas palabras son igual de largas :)`;
            break;
    }
    try{
        
    }
    catch (error){
        console.log(error);
        titularGanador.innerHTML = `${checkPalabraMasLarga()}
            <br/>No ha ganado ningún jugador, esta pantalla no debería
            salir en caso de empate o que ningún ganador gane`;        
    }
}