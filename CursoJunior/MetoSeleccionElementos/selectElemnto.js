// METODOS DE SELECCION DE ELEMENTOS. (document.elemento())

let parrafo = document.getElementById("parrafo"); // SELECCIONA EL ELEMENTO QUE TIENE EL ID.
let p = document.getElementsByTagName("p"); // DEVUELVE TODOS LOS ELEMENTOS ESPECIFICOS AL DECLARAR EL ELEMENTO.

// SELECCIONA EL ATRIBUTO DE TIPO CLASE
let query = document.querySelector(".parrafo1"); // DEVULEVE EL PRIMER ELEMENTO QUE COINCIDA CON EL GRUPO ESPECIFICADO DE SELECTORES.

// document.write(p[0]); // SELECCIONAR OBJETOS
document.write(query);