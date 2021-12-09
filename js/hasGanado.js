crearBurbujas = false;

window.onload = function(){
    let titular = document.getElementById("titularPalabra");
    let sbutitulo = document.getElementById("subtituloPalabra");
    
    switch (checkPalabraMasLarga()){
        case 0:
        case 1:
            titular.innerHTML = `¡${Jugadores[checkPalabraMasLarga()].nombre} gana!`;
            sbutitulo.innerHTML = `Enhorabuena 🦾`;
            agregarConfeti();
            break;
        case "ganaNadie":
            titular.innerHTML = `¡Nadie gana!`;
            sbutitulo.innerHTML = `Ninguna palabra es válida 👻`;
            break;
        case "empate":
            titular.innerHTML = `¡Empate!`;
            sbutitulo.innerHTML = `Ambas palabras son igual de largas ✨`;
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

// Variables del confeti
var colors = ["rgba(30,144,255,1)",
    "rgba(107,142,35,1)",
    "rgba(255,215,0,1)",
    "rgba(255,192,203,1)",
    "rgba(106,90,205,1)", 
    "rgba(173,216,230,1)", 
    "rgba(238,130,238,1)", 
    "rgba(152,251,152,1)", 
    "rgba(70,130,180,1)", 
    "rgba(244,164,96,1)", 
    "rgba(210,105,30,1)",
    "rgba(220,20,60,1)"];
var ancho = [ "1%","2%","3%"];
var alto = [ "2vw","3vw","4vw"];
var animaciones = ["tirarConfeti", "tirarConfetiInverso"];

/**
 * Genera el confeti del fondo y sus animaciones
 */
function agregarConfeti(){
    var confetiContainer = document.getElementById("contenedorConfetis");
    var miConfeti;

    for (let i = 0; i < 30; i++) {
    miConfeti = document.createElement("div");
    miConfeti.classList="confeti";
    miConfeti.style.backgroundColor = getRandomFromArray(colors);
    miConfeti.style.width = getRandomFromArray(ancho);
    miConfeti.style.height = getRandomFromArray(alto);

    let rotacion = 0;
    do {
        rotacion = getRandom(-3, 3);
    } while (rotacion == 0);

    miConfeti.animate([
        // keyframes
        { bottom: '0', opacity: '0'},
        { opacity: '1' },
        { opacity: '1' },
        { opacity: '0.5' },
        {
            opacity: '0'
            , bottom: '-80vh'
            , transform: `rotate(${rotacion}turn)
                skew(${getRandom(5,25)}deg, ${getRandom(5,25)}deg)` }
        ], {
        // timing options
        duration: getRandom(5000, 10000),
        delay: getRandom(0, 8000),
        iterations: Infinity
    });
    
    confetiContainer.appendChild(miConfeti);
    }
}