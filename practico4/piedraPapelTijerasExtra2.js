console.log();
const readlineSync = require('readline-sync');
let jugadas;
let j = false;
    do {
    jugadas = readlineSync.question("Ingrese en cuantas jugadas quiere terminar el juego (Numero entero y positivo): ");
    jugadas = Number(jugadas);
    if (jugadas > 0 & Number.isInteger(jugadas)) {
    j = true;
}       else {
        console.log("La opcion ingresada es incorrecta");
        }
    } while (j == false);
console.log();

let totalUsuario = 0;
let totalComputadora = 0;
for (let k = 1; k <= jugadas; k++) {

function obtenerJugadaComputadora() {
    let compu;
    let jugadaCompu;
    compu = Math.floor(Math.random() * 3);
    if (compu == 0) {
    jugadaCompu = "piedra";
    } else if (compu == 1) {
    jugadaCompu = "papel";
    } else {
    jugadaCompu = "tijeras";
    }
    return jugadaCompu;
}

function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario;
    let i = false;
    do {
    jugadaUsuario = readlineSync.question("ingrese su eleccion. Los valores posibles son: piedra, papel o tijeras: ");
        if (jugadaUsuario == "piedra" || jugadaUsuario == "papel" || jugadaUsuario == "tijeras") {
            i = true;
}        else {
            console.log("La opcion ingresada es incorrecta");
        }
    } while (i == false);
    console.log();
    return jugadaUsuario;
}

function determinarGanador(usuario, computadora) {
    let ganador;
    if ((usuario == "piedra" & computadora == "tijeras") || (usuario == "tijeras" & computadora == "papel") || (usuario == "papel" & computadora == "piedra")) {
    ganador = "usuario";
    }   else if (usuario == computadora) {
        ganador = "empate";
    }   else {
        ganador = "computadora";
    }
    return ganador;
}

let jugadaCompu = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let ganador = determinarGanador(jugadaUsuario, jugadaCompu);
console.log("La computadora eligio: " + jugadaCompu + ".");
console.log("El usuario eligio: " + jugadaUsuario + ".");
if (ganador == "usuario") {
    console.log("El resultado fue: Gana el usuario.");
    totalUsuario++;
}   else if (ganador == "computadora") {
    console.log("El resultado fue: Gana la computadora.");
    totalComputadora++;
}       else {
        console.log("El resultado fue: Empate.");
}
console.log();
}

if (totalUsuario > totalComputadora) {
    console.log("El usuario gano el juego por " + totalUsuario + " a " + totalComputadora + ".");
}   else if (totalUsuario < totalComputadora){
    console.log("La computadora gano el juego por " + totalComputadora + " a " + totalUsuario + ".");
}   else {
    console.log("El juego termino empatado en " + totalUsuario + ".");
}
console.log();
