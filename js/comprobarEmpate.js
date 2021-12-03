window.onload = function(){
    updateJugadores();
    
    document.getElementById("nombreJ1").innerHTML = Jugadores[0].nombre;
    document.getElementById("palabraJ1").innerHTML = Jugadores[0].palabra;

    document.getElementById("nombreJ2").innerHTML = Jugadores[1].nombre;
    document.getElementById("palabraJ2").innerHTML = Jugadores[1].palabra;

    
}

function palabraIncorrecta(idJugador){
    console.log(idJugador)
    sessionStorage.setItem(`validoJugador${idJugador+1}`, false);
    window.open('comprobarPalabra.html','_self');
}

function ambasCorrectas(){
    window.open('hasGanado.html','_self');
}