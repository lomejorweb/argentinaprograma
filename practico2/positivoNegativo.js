const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingresa un numero: ");
if(numero > 0) {
    console.log("El numero es positivo");
} else if(numero == 0) {
    console.log("El numero es cero");   
}  else {
    console.log("El numero es negativo");
}
