function metodosConsola(){

    // CONSOLE
    console.assert(5 < 3); // APARECE ERROR EN CONSOLA SI LA CONDICION NO ES VERDADERA.
    console.clear(); // LIMPIA LA CONSOLA.
    console.error(); // MUESTRA UN ERROR.
    console.info(); // MUESTRA UN MENSAJE POR CONSOLA.
    console.log(); // MUESTRA UN MENSAJE POR CONSOLA.
    console.table([]); // TOMA COMO PARAMETRO UN ARRAY Y MUESTRA UNA TABLA CON LOS ELEMENTOS Y SUS POSICIONES.
    console.warn(); // MUESTRA UNA ADVERTENCIA POR CONSOLA. 
    console.dir(); // DESPLIEGA UNA LISTA INTERACTIVA.[NO ESTANDAR]

    // CONTEO
    console.count(); // DEVUELVE LA VECES QUE SE EJECUTA UNA FUNCION.
    console.countReset(); // REGRESA AL VALOR INCIAL.

    // AGRUPACION
    console.group("NombreDelGrupo"); // CREA NIVELES DE GRUPO DE FORMA ABIERTA.
    console.groupEnd(); // VUELVE AL GRUPO ANTERIOR AL QUE ESTAS.
    console.groupCollapsed("NombreDelGrupo"); // CREA NIVELES DE GRUPO DE FORMA CERRADA.

    // TEMPORIZACION
    console.time(); // MUESTRA LA CANTIDAD DE TIEMPO DE EJECUCION.
    console.timeLog(); // MUESTRA EL TIMEPO DE EJECUCION POR LINEA DE CODIGO.
    console.timeEnd(); // TERMINA EL TEMPORIZADOR Y MUESTRA EL TIMEPO DE EJECUCION.
}

function estilos(){
    console.log("%cJOSUE", `color: white; 
                            background-color: darkorchid;
                            border-radius: 10px;
                            padding: 10px;
                            border: 1px solid blue;`);
}


const notasReg = (notaReg) => {
    let notas = {
        fisica: [90, 3, 9],
        quimica: [60, 3, 9],
        matematicas: [90, 1, 9],
        biologia: [100, 5, 9],
        programacion: [85, 4, 10],
    }
    if(notas[notaReg][0] >= 70 && notas[notaReg][1] >= 3 && notas[notaReg][2] >= 9){
        console.log(`%cAprobaste ${notaReg}.`, "color: green;");
    } else {
        console.log(`%cDesaprobaste ${notaReg}.`, "color: red;");
    }
}
console.groupCollapsed("Materias Registradas:");
notasReg("fisica");
notasReg("quimica");
notasReg("matematicas");
notasReg("biologia");
notasReg("programacion");
