
let materias = {
    fisica: ["Perez" ,"Josue" , "Daniel", "Fabian", "Maria"],
    quimica: ["Ricardo" ,"Josue" , "Fabian", "Maria"],
    programacion: ["Jorge" ,"Josue" , "Daniel", "Maria"],
    matematicas: ["Pedro" ,"Josue" , "Daniel", "Fabian", "Maria"],
}

const registrarAlumno = (alumno, materia) =>{
   let personas = materias[materia]; 
   personas.shift();

   if(personas.length >= 20){
       document.write("Lo siento, la clase esta completa.");
   } else {
       let asignarAlumno = personas.push(alumno);
       if(materia == "fisica"){
        materias = {
            fisica: asignarAlumno,
            quimica: ["Ricardo" ,"Josue" , "Fabian", "Maria"],
            programacion: ["Jorge" ,"Josue" , "Daniel", "Maria"],
            matematicas: ["Pedro" ,"Josue" , "Daniel", "Fabian", "Maria"],
        }
       }else if (materia == "quimica"){
        materias = {
            fisica: ["Perez" ,"Josue" , "Daniel", "Fabian", "Maria"],
            quimica: asignarAlumno,
            programacion: ["Jorge" ,"Josue" , "Daniel", "Maria"],
            matematicas: ["Pedro" ,"Josue" , "Daniel", "Fabian", "Maria"],
        }
       }else if (materia == "programacion"){
        materias = {
            fisica: ["Perez" ,"Josue" , "Daniel", "Fabian", "Maria"],
            quimica: ["Ricardo" ,"Josue" , "Fabian", "Maria"],
            programacion: asignarAlumno,
            matematicas: ["Pedro" ,"Josue" , "Daniel", "Fabian", "Maria"],
        }
       }else if (materia == "matematicas"){
        materias = {
            fisica: ["Perez" ,"Josue" , "Daniel", "Fabian", "Maria"],
            quimica: ["Ricardo" ,"Josue" , "Fabian", "Maria"],
            programacion: ["Jorge" ,"Josue" , "Daniel", "Maria"],
            matematicas: asignarAlumno,
        }
       }else{
          alert("Error al digitar los datos."); 
       }
   }
   return `Alumno: <b>${alumno}</b> ha sido inscrito correcatamente a la clase de <b>${materia}</b>.`;
//    return personas;
}
// document.write(materias.fisica + "<br>");
let info = registrarAlumno("Nicolas", "fisica");
document.write(info);



