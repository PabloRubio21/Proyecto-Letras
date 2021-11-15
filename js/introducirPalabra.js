window.addEventListener("load", iniciar);
let letrasIntroducidas="olaquetal";
let contenedor1;
let contenedor2;
let cajas;
let cajas1;
let cajas2;
let letraAux="";
let cajaAuxiliar;
let boton;

/**
 * Crear eventos, alguna variable global, para cargar la pagina y
 * para llamar a la funcion que coloca las letras
 */
function iniciar(){
    contenedor1=document.getElementById("contenedor1");
    cajas1=contenedor1.children;
    contenedor2=document.getElementById("contenedor2");
    cajas2=contenedor2.children;
    boton=document.getElementsByTagName("button")[0];

    // Eventos
    contenedor1.addEventListener("click", cogerLetras);
    contenedor2.addEventListener("click", cogerLetras);
    contenedor1.addEventListener("click", colocarLetras);
    contenedor2.addEventListener("click", colocarLetras);
    boton.addEventListener("click", darPalabra);

    agregarLetras(letrasIntroducidas);
}

/**
 * Coloca el String de letras dentro de las cajas
 * @param {String} string letras sin formar
 */
function agregarLetras(letrasIntroducidas){
    let array=letrasIntroducidas.split("");
    let texto;
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        texto=document.createTextNode(e);
        cajas1[i].appendChild(texto);
    }
}

/**
 * Recoge el evento al hecer click y lo usa para coger el texto de la
 * caja que se selecciona
 * @param {Event} e evento al hacer click
 */
function cogerLetras(e){
    cajas=this.children;
    if(e.target.innerHTML!="" && letraAux==""){
        for (let i = 0; i < cajas.length; i++) {
            if(e.target==cajas[i]){
                letraAux=e.target.innerHTML;
                cajaAuxiliar=cajas[i];
                e.target.innerHTML="";
                this.removeEventListener("click", colocarLetras);
                this.addEventListener("click", colocarLetras);
                break;
            }
        }
    }
}

/**
 * Coloca la letra en la posicion correspondiente a la caja en la que se
 * haya hecho click, si la caja no estaba vacia y ya contenia una letra,
 * las cambia de posicion
 * @param {Event} e evento al hacer click
 */
function colocarLetras(e){
    let texto;
    cajas=this.children;
    if(e.target.innerHTML==""){
        for (let i = 0; i < cajas.length; i++) {
            if(e.target==cajas[i]){
                texto=document.createTextNode(letraAux);
                e.target.appendChild(texto);
                letraAux="";
                break;
            }
        }
    }else{
        for (let i = 0; i < cajas.length; i++) {
            if(e.target==cajas[i]){
                // Coloco la letra de la posicion final en la posicion inicial
                texto=document.createTextNode(e.target.innerHTML);
                cajaAuxiliar.appendChild(texto);
                e.target.innerHTML="";

                // Coloco la letra de la posicion inicial en la posicion final
                texto=document.createTextNode(letraAux);
                e.target.appendChild(texto);
                letraAux="";
                break;
            }
        }
    }
}

/**
 * Coge el texto de cada caja y lo convierte a un string
 * @returns la palabra formada a partir de las letras dadas
 */
function darPalabra(){
    let array=[];
    for (let i = 0; i < cajas2.length; i++) {
        array.push(cajas2[i].innerHTML);
    }
    return array.join("");
}