// Variable
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;

// Declaro la lista de números sorteados
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        } 
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = " ";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya sorteamos todos los números.
    if (listaNumerosSorteados.length == numeroMaximo) {
    
    } else {
        // Si el número generado está incluido en la lista:
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
    
        } else {
            listaNumerosSorteados.push(numeroGenerado); 
            return numeroGenerado
        }
}
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de inicio de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
