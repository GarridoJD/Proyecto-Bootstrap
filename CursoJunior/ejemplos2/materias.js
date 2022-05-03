
const obtenerMateria = (materia) => {
    let materias = {
        fisica: ["Perez" ,"Josue" , "Daniel", "Fabian", "Maria"],
        quimica: ["Ricardo" ,"Josue" , "Fabian", "Maria"],
        programacion: ["Jorge" ,"Josue" , "Daniel", "Maria"],
        matematicas: ["Pedro" ,"Josue" , "Daniel", "Fabian", "Maria"],
    }
    if(materias[materia] != undefined){
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const obtenerInformacion = (materia) => {
    let info = obtenerMateria(materia);
    if(info != false){
        let profesor =  info[0][0];
        let alumnos = info[0];
        alumnos.shift();
        document.write(`<b>Materia:</b> ${info[1]}.<br> <b>Profesor:</b> ${profesor}.<br> <b>estudiantes:</b> ${alumnos}.<br><br>`);
    }
}
const cantidadClases = (alumno) => {
    let info = obtenerMateria();
    let clasesPresentes = [];
    let cantidadTotal = 0;

    for(let recorrido in info){
        if(info[recorrido].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + recorrido);
        }
    }
    return `El/La estudiande <b>${alumno}</b> esta en <b>${cantidadTotal}</b> clases: <b style="color: green;">${clasesPresentes}</b>.`;
}

const mostrarClases = (alumno) =>{
    
}
// obtenerInformacion("fisica");
// obtenerInformacion("quimica");

let opcion = prompt(`Digite el numero de la materia que desea ver: 
1. Física.
2. Química.
3. Programación.
4. Matemáticas.
5. Cantidad de clases del estudiante.`);

if(opcion == 1){
    obtenerInformacion("fisica");
}else if(opcion == 2){
    obtenerInformacion("quimica");
}else if(opcion == 3){
    obtenerInformacion("programacion");
}else if(opcion == 4){
    obtenerInformacion("matematicas");
}else if(opcion == 5){
    let estudiante = prompt(`Digite el nombre del estudiante:`);
    let mostrar = cantidadClases(estudiante);
    document.write(mostrar);
}else{
    alert("Error, no existe el numero de la materia.");
}



