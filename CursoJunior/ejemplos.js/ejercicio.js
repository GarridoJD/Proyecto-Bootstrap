// PROBLEMA A RESOLVER
// Tres chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema,
// los precios no estan al lado de cada estante con su respectivo helado, 
// ellos quieren comprar el helado mas caro que puedan comprar con el dinero que tienen.


let dinero = prompt("Bienvenido, digita el dinero que tienes disponible:");
let nombre = prompt("¿Como te llamas?:");
let telefono = prompt("Ahora digita tu telefono:");

dinero = parseInt(dinero);
// nombre = parseFloat(nombre);
telefono = parseInt(telefono);

if(dinero >= 0){
    alert(`TUS DATOS:\nNombre: ${nombre}\nTelefono: ${telefono}\nDinero disponible: ${dinero}$.`);
    let opcion = prompt("Bienvenido, digita el numero del helado que deseas comprar: \n" 
    + "1. Helado de Chocolate: 6000$\n"
    + "2. Helado de Vainilla: 12000$\n"
    + "3. Helado de Arequipe: 10000$\n"
    + "4. Helado de Fresa: 7500$\n"
    + "5. Helado de Galleta: 15000$" );

    if(opcion == 1){
        if(dinero > 6000){
            alert("!Genial¡, acabas de comprar el helado de chocolate.");
            let vuelto = dinero - 6000;
            alert(`Aqui esta tu rembolso ${vuelto}$, vuelva pronto :)`);
        }else if(dinero == 6000){
            alert("No hay rembolso.");
        }else{
            alert("No tiene el dinero suficiente para comprar el helado.")
        }
    }else if(opcion == 2){
        if(dinero > 12000){
            alert("!Genial¡, acabas de comprar el helado de vainilla.");
            let vuelto = dinero - 12000;
            alert(`Aqui esta tu rembolso ${vuelto}$, vuelva pronto :)`);
        }else if(dinero == 12000){
            alert("No hay rembolso.");
        }else{
            alert("No tiene el dinero suficiente para comprar el helado.")
        }
    }else if(opcion == 3){
        if(dinero > 10000){
            alert("!Genial¡, acabas de comprar el helado de arequipe.");
            let vuelto = dinero - 10000;
            alert(`Aqui esta tu rembolso ${vuelto}$, vuelva pronto :)`);
        }else if(dinero == 10000){
            alert("No hay rembolso.");
        }else{
            alert("No tiene el dinero suficiente para comprar el helado.")
        }
    }else if(opcion == 4){
        if(dinero > 7500){
            alert("!Genial¡, acabas de comprar el helado de fresa.");
            let vuelto = dinero - 7500;
            alert(`Aqui esta tu rembolso ${vuelto}$, vuelva pronto :)`);
        }else if(dinero == 7500){
            alert("No hay rembolso.");  
        }else{
            alert("No tiene el dinero suficiente para comprar el helado.")
        }
    }else if(opcion == 5){
        if(dinero > 15000){
            alert("!Genial¡, acabas de comprar el helado de galleta.");
            let vuelto = dinero - 15000;
            alert(`Aqui esta tu rembolso ${vuelto}$.`);

            let helado = prompt("¿Desea comprar otro helado?.\nDigite 'si' o 'no':");
            if(helado == "si" || helado=="Si" || helado=="SI"){
                alert("hola");
            }else if(helado >= 0 || helado <= 0){
                alert("Esta digitando Erroneamente.");
            }else{
                alert("Gracias, vuelva pronto :)");
            }
        }else if(dinero == 15000){
            alert("!Genial¡, acabas de comprar el helado de galleta.");
            alert("No hay rembolso.");
        }else{
            alert("No tiene el dinero suficiente para comprar el helado.")
        }
    }else{
        alert("Digite los numeros que estan en pantalla por favor.");
    }
}else{
    alert("ERROR, Digitó de forma erronea los Datos.");
}





