let pared = ["superior", "izquierda", "derecha", "inferior"];
let colores = ["green", "red", "blue",  pared, "yellow"];

finColores:
for (let array in colores){
    if(array == 3){
        for(let array of pared){
            // document.write(array + "<br>");
            continue finColores;
        }
    }else{
        document.write(colores[array] + "<br>");
    }
}

// for (let recorrido of pared){
//     if(recorrido == "derecha"){
//         continue;
//     }else{
//         document.write(recorrido);
//     }
// }

