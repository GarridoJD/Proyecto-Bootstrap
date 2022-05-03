let nombre = prompt("Digita tu nombre:");
let edad = prompt("Digita tu edad");
let telefono = prompt("Digita tu telefono");
let email = prompt("Digita tu email");

function datos(){
document.write(`<b>Tus datos:</b><br>
                Nombre: ${nombre}.<br>
                Edad: ${edad}.<br>
                telefono: ${telefono}.<br>
                email: ${email}.<br>`);
}
datos();

propiedades = function(){
    if (nombre == "Josue"){
        document.write(`<hr><b>Hola josue estos son tus activos: </b><br>`);
        let propiedad = ["Casa","Moto","Tienda","Patio"];
        for (let recorrido in propiedad){
            document.write("-" + propiedad[recorrido] + "<br>");
        } 
    }else{
        alert("Este usuario no esta registrado.");
    }
    
   
}
propiedades;

function saludar(){
    alert("Hola, ¿que tal?");
    return "Se ha ejecutado correctamente la función: <b>saludar()</b>.";
}

let saludo = saludar();
document.write(saludo);