
let numero = prompt("Digita un numero de personas:");
let personaNum = 1;

for (let i = 1; i <= numero; i++){
    let nombre = prompt("Digita el nombre de la persona " + (personaNum++));
    document.write(i + ". " + nombre + "<br>");
}