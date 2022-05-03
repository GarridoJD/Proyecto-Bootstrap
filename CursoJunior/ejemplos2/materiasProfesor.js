
// 12 materias con profesores asignados a cada una 
// y todos los alumnos anotados en dichas clases, 
// Crear una funcion que al pasarle como parametro 
// la materia muestre al profesor asignado a esta 
// y todos los alumnos de esa clase
// Ademas crear otra funcion que nos diga en cuantas clase esta cada alumno
// y ademas nombrar las clases en las que esta y el profesor de cada clase.
let materia = ["Matematicas","Redes","Base de datos","Programacion",
"Sistemas operativos","RedesII","Investigacion","CalidadSoft","Seguridad"
,"AdminRedes","Teoria de sistemas","Electromagnetismo"];

let profesor =  ["A","B","C","D","E","F","G","H","I","J","K","L"];

const alumnosP = (nombre, materia) =>{
    
}

let opcion = prompt(`Digite el numero de la opcion: 
1. Ver Materia, Profesor y alumnos.
2. Mostrar clases del alumno.`);

if(opcion == 1){
    let opcionInfo = prompt("Digite el nombre de la materia:");
    if(opcionInfo == "Matematicas" || opcionInfo == "matematicas"){
        let relacion = [];
        for(let i = 0; i < 1; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Redes" || opcionInfo == "redes"){
        let relacion = [];
        for(let i = 1; i < 2; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Base de datos" || opcionInfo == "redes"){
        let relacion = [];
        for(let i = 2; i < 3; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Programacion" || opcionInfo == "programacion"){
        let relacion = [];
        for(let i = 3; i < 4; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Sistemas operativos" || opcionInfo == "sistemas operativos"){
        let relacion = [];
        for(let i = 4; i < 5; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "RedesII" || opcionInfo == "redesII"){
        let relacion = [];
        for(let i = 5; i < 6; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Investigacion" || opcionInfo == "investigacion"){
        let relacion = [];
        for(let i = 6; i < 7; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "CalidadSoft" || opcionInfo == "calidadsoft"){
        let relacion = [];
        for(let i = 7; i < 8; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Seguridad" || opcionInfo == "seguridad"){
        let relacion = [];
        for(let i = 8; i < 9; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "AdminRedes" || opcionInfo == "adminredes"){
        let relacion = [];
        for(let i = 9; i < 10; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Teoria de Sistemas" || opcionInfo == "teoriasistemas"){
        let relacion = [];
        for(let i = 10; i < 11; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else if(opcionInfo == "Electromagnetismo" || opcionInfo == "electromagnetismo"){
        let relacion = [];
        for(let i = 11; i < 12; i++){
            relacion = [materia[i], profesor[i]];
            document.write(`<b>INFORMACION POR MATERIA:</b><br>
                            <b>Materia:</b> ${relacion[0]}. 
                            <b>Profesor:</b> ${relacion[1]}.<br>
                            <b>Alumnos: </b>`);
        }
    }else{
        alert("ERROR, No digito correctamente.");
    }
}else{
    alert("ERROR, No digito correctamente.");
}
// -Redes
// -Base de datos
// -Programacion
// -Sistemas operativos
// -RedesII
// -Investigacion
// -CalidadSoft
// -Seguridad
// -AdminRedes
// -Teoria de sistemas
// -Electromagnetismo`);



