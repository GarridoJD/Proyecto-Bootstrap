
let cadena = "cadena de prueba de ";
let cadena2 = ", cadena de prueba 2"

let unionCadena = cadena.concat(cadena2);
let igualdadInicio = cadena.startsWith(cadena2);
let igualdadFinal = cadena.endsWith(cadena2);
let buscaCadena = cadena.includes("cadena");
let posicionCadena = cadena.indexOf("de");
let posicionFinalCadena = cadena.lastIndexOf("de");
  
let rellenarCadena = cadena.padStart();
let rellenarFinalCadena = cadena.padEnd();
let repetirCadena = cadena.repeat(3);

let arrayCadena = cadena.split(" ");
let devuelveCadena = cadena.substring(10,16);
let minusculaCadena = cadena.toLowerCase();
let mayusculaCadena = cadena.toUpperCase();
let textoCadena = cadena.toString();
let removerEspacio = cadena.trim();
let removerEspacioInicio = cadena.trimStart();
let removerEspacioFinal = cadena.trimEnd();

// document.write(cadena.length);
document.write(cadena.length);