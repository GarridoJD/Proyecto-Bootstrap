// var, let, const
 // const se tiene que inicializar cuando se declara.
// const valor = 4;

// let numero1, numero2, numero3;
// numero1 = 29;
// numero1 = 18;

// numero2 = 12;
// numero3 = 40;

// alert( "El numero 1 es: " + numero1 + ", El numero 2 es: "+ numero2 + " y el numero 3 es: " + numero3);
// alert(valor);

// let nombre = prompt("Dime tu nombre");
// alert("Tu nombre es: " + nombre);


//  if(primervalor >=0 ){
//     alert(primervalor);
//  }else{
//     alert("digita un numero bobogrande");
//  }


// let numero1 = 18, numero2 = 21, texto="El numero 1 es = ";
// numero1 += 1; // 18 + 1 = 19
// numero1 -= 4; // 19 - 4 = 15
// numero1 *= 2; // 15 * 2 = 30
// numero1 /= 3; // 30 / 3 = 10
// numero1--

// document.write(numero1);
// document.write('<br>');

// frase = texto.concat(numero1);
// document.write(frase);

let numero1, numero2;

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

let opcion = prompt("Indica el numero para la opcion a realizar: \n"
    + "1 - Suma.\n"
    + "2 - Resta.\n" 
    + "3 - Multiplicacion.\n"
    + "4 - Division.");

if(opcion >= 1 && opcion <= 5){
    if(opcion == 1 ){
        numero1 = prompt("Digita un numero");
        numero2 = prompt("Digita otro numero");
        if(numero1 >= 0 && numero2 >= 0){
            numero1 += numero2;
            alert(`La suma es: ${numero1}`);
        }else{
            alert("ERROR. Debe digitar datos numericos y que sean mayor que 0.")
        }
    }else if(opcion == 2){
        numero1 = prompt("Digita un numero");
        numero2 = prompt("Digita otro numero");
        if(numero1 >= 0 && numero2 >= 0){
            numero1-=numero2;
            alert(`La resta es: ${numero1}`);
        }else{
            alert("ERROR. Debe digitar datos numericos y que sean mayor que 0.")
        }
    }else if(opcion == 3){
        numero1 = prompt("Digita un numero");
        numero2 = prompt("Digita otro numero");
        if(numero1 >= 0 && numero2 >= 0){
            numero1*=numero2;
            alert(`La Multiplicacion es: ${numero1}`);
        }else{
            alert("ERROR. Debe digitar datos numericos y que sean mayor que 0.")
        }
    }else{
        numero1 = prompt("Digita un numero");
        numero2 = prompt("Digita otro numero");
        if(numero1 >= 0 && numero2 >= 0){
            numero1/=numero2;
            alert(`La Division es: ${numero1}`);
        }else{
            alert("ERROR. Debe digitar datos numericos y que sean mayor que 0.")
        }
    }
}else{
    alert("ERROR. Digita los numeros que estan en pantalla.");
}

