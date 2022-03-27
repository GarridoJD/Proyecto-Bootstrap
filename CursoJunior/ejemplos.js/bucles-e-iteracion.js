let numero = prompt("Digita un numero:");
let numero2 = prompt("Digita otro numero:");
//  CICLO WHILE
// while (numero < 10){
//     numero++;
//     console.log(numero);
//     // document.write(numero + "<br>");
// }

//  CICLO DO WHILE
// do {
//     console.log(numero);
//     numero++;
    
// }while(numero <= 5);

while(numero <= 100){
    numero++;
    document.write(numero);
    if(numero > 10){
        break;
    }
}

// BREAK Finaliza el ciclo.

// while(numero < 1000){
//     numero++;
//     console.log(numero);
//     if (numero == 10){
//         break;
//     }
// }