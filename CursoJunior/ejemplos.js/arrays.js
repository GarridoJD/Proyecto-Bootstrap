
frutas = ["Mango", "Pera", "Tanzama", "Fresa"];

document.write(frutas[0] + "<br>");

let pc = {
    nombre: "Usuario",
    procesador: "Intel Core",
    ram: "16GB",
    almacenamiento: "1TB",
}

let cuarto = {
    propiedad: "Josue",
    cama: 4,
    marca: "HP",
}

let oracion = {
    linea1:"Hola mi nombre es Josué",
    linea2:"amo bailar",
    linea3:"y soy hijo de Dios",
    linea4:"le doy gracias a el por todo lo que me ha dado",
    linea5:"y quiero que me de fuerzas para ser mejor persona y no caer en la tentacion"
}

// parrafo = `${oracion.linea1}, ${oracion.linea2} ${oracion.linea3}, ${oracion.linea4} ${oracion.linea5}`;
// alert(parrafo);

// PC
let nombreI = pc.ram;
let procesadorI = pc.procesador;
let ramI = pc.ram;
let espacioI = pc.almacenamiento;

frase = `El nombre es: ${nombreI}\nEl procesador es: ${procesadorI}\nLa ram es de: ${ramI}\nY el espacio es: ${espacioI}`;
alert(frase);


document.write(`La propiedad pertenece a: ${cuarto.propiedad}<br>`);
document.write(`la marca de la pc es ${cuarto.marca}<br>`);
document.write(`Y la cama es de: ${cuarto.cama} metros`);

// document.write(pc.nombre + "<br>");
// document.write(cuarto.pc);