
let cantidad = prompt("Digita el numero de estudiantes.");
let estudiantes = [];

for(i = 0; i < cantidad; i++){
    estudiantes[i] = [prompt("Digita el nombre del estudiante " + (i + 1)),0];
}

const tomarAsistencia = (nombre,p) =>{
    let presente = prompt(nombre);
    if(presente == "p" || presente == "P"){
        estudiantes[p][1]++;
    }
}

for(i = 0; 1 < 30; i++){
    for(let alumno in estudiantes){
        tomarAsistencia(estudiantes[alumno][0], alumno);
    }
}
for(let alumno in estudiantes){
    let resultado = `Estudiante: <b>${estudiantes[alumno][0]}<b><br>
    _________________Presentes: ${estudiantes[alumno][1]}<br>
    _________________Ausencias: ${30 - parseInt(estudiantes[alumno][1])}`;

    if(30 - estudiantes[alumno][1] >= 18){
        resultado += document.write(`El estudiante <b>${estudiantes[alumno][0]}<b> rebrobo la clase por inasistencia`);
    }else{
        resultado += "<br><br>";
    }
    document.write(resultado);
}

