
let array = ["Jose", "Maria", "Fabian"];
let array2 = ["Josue", "Jefferson", "Saray"];
let array3 = [2,4,1,6,3,9.1,9,8];
let array4 = ["Joel", "Rafael", "Simon","Sebastian"];

// TRANSFORMADORES
let eliminarFinal = array.pop();
let eliminarInicio = array.shift();
let addElemtoFinal = array.push("Daniel");
let revertirOrden = array2.reverse();
let addElemntoInicio = array2.unshift(1, 2);
// let ordenarArray = array3.sort();
// let cambiaEliminaElementos = array3.splice(1, 0, 2); 

// ACCESORES
let arrayACadenaTexto = array.join(" - ");
// let devuelveArray = array3.slice(0, -2); // (7);

// REPETIDORES
// ".length" Determina cuantos caracteres tiene en una string y cuantos elementos tiene en un array.
let bucleArray = array4.filter(numero => numero.length > 4); // RECIBEN FUNCIONES COMO PARAMETROS
// let bucle2Array = array.forEach(numero => document.write(numero + "<br>"));

document.write(bucleArray);

