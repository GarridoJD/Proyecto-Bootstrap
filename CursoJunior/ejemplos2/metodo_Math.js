// METODOS DE OPERCAIONES MATEMATICAS.

// let numero = Math.sqrt(6); // RAIZ CUADRADA DEL NUMERO.
// let numero2 = Math.cbrt(6); // RAIZ CUBICA DEL NUMERO.

// let numero3 = Math.max(6,7,8,10,203,123,40,1); // DEVUELVE EL NUMERO MAS GRANDE.
// let numero4 = Math.min(6,7,8,10,203,123,40,1); // DEVUELVE EL NUMERO MAS PEQUEÑO.

 // CALCULAR POTENCIA.
let resultado = 0;
let numeroP = prompt("Digita un numero:");
let potencia = prompt("Digite la potencia del numero:");
resultado = numeroP;
potencia--;

for(let i = 0; i < potencia; i++){
    resultado = resultado * numeroP;
}

alert("El resultado es: " + resultado);
