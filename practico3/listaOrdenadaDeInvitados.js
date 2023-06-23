let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] == ("Jose") || personas[i] == ("Sofia")) {
        rechazados = rechazados.concat(personas[i]);
    } else {
        admitidos = admitidos.concat(personas[i]);
    }
}

console.log("La lista ordenada de invitados admitidos es:");
admitidos = admitidos.sort();
for (let i = 0; i <= admitidos.length - 1; i++) {
    console.log(admitidos[i]);
}

console.log("La lista ordenada de invitados rechazados es:");
rechazados = rechazados.sort();
for (let i = 0; i <= rechazados.length - 1; i++) {
    console.log(rechazados[i]);
}
