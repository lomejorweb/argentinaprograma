const readlineSync = require('readline-sync');
let mesNumero = readlineSync.question("Ingrese un numero entero del 1 al 12 representando los meses: ");

let mesNombre = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let mesDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (mesNumero == 1 || mesNumero == 2 || mesNumero == 3 || mesNumero == 4 || mesNumero == 5 || mesNumero == 6 || mesNumero == 7 || mesNumero == 8 || mesNumero == 9 || mesNumero == 10 || mesNumero == 11 || mesNumero == 12) {
let mes = mesNombre[mesNumero - 1];
let cantidadDeDias = mesDias[mesNumero - 1];
console.log("La cantidad de dias del mes de " + mes + " es " + cantidadDeDias);
} else {
console.log("El numero ingresado es incorrecto");
}
