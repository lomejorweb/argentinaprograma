function obtenerJugadaComputadora() {
    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    let compu;
    let jugadaCompu;
    compu = Math.floor(Math.random() * 3);
    if (compu == 0) {
    jugadaCompu = piedra;
    } else if (compu == 1) {
    jugadaCompu = papel;
    } else {
    jugadaCompu = tijeras;
    }
    return jugadaCompu;
}

function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    let jugadaUsuario;
    let i = false;
    do {
    jugadaUsuario = readlineSync.question("ingrese su eleccion. Los valores posibles son: piedra, papel o tijeras: ");
        if (jugadaUsuario == piedra || jugadaUsuario == papel || jugadaUsuario == tijeras) {
            i = true;
}        else {
            console.log("La opcion ingresada es incorrecta");
        }
    } while (i == false);
    return jugadaUsuario;
}

function determinarGanador(usuario, computadora) {
    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    let ganador;
    if ((usuario == piedra & computadora == tijeras) || (usuario == tijeras & computadora == papel) || (usuario == papel & computadora == piedra)) {
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
}   else if (ganador == "computadora") {
    console.log("El resultado fue: Gana la computadora.");
}       else {
        console.log("El resultado fue: Empate.");
}
