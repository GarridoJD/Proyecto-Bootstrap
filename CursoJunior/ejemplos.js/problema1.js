
let gratis = false;

const tiempo = time => {
    let edad = prompt("¿Que edad tienes?");
    if(edad >= 18){
        alert("Bienvenido");
        if(time >= 2 && time <= 7 && gratis == false){
            alert("Como eres la primera persona en llegar despues de las 2am, entras gratis.");
            // Convierte el valor false a true para que no se repita.
            gratis = true;
        }else{
            alert("Adelante, tienes que pagar la entrada");
        }
    }else{
        alert("Lo siento, no puedes ingresar.");
    }
}

tiempo(1);
tiempo(2);
tiempo(3);
tiempo(4);