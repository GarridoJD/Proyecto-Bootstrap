
let numero = prompt("Digita un numero de personas:");
let personaNum = 1;

for (let i = 1; i <= numero; i++){
    let nombre = prompt("Digita el nombre de la persona " + (personaNum++));
    if(nombre >= 0 && nombre <= 0){
        alert("ERROR haz digitado un valor numerico.");
    }else{
        if (i == 5){
            // break;
            continue;
        }
        document.write(i + ". " + nombre + "<br>");
    }
    
}


