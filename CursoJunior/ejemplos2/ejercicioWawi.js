
// Numero y color de Sticker.
// 1, 3 color: amarilla. 
// 4, 6 color: rosa.
// 7, 0 color: roja.

// El Departemento. de Seguridad Publica y Transito de Barranquilla. 
// desea saber, de los N autos que entran a la ciudad, cuantos entran 
// con Stickers de cierto color. Conociendo el último dígito de la placa de cada 
// automóvil se puede determinar el color del Stickers utilizando la siguiente 

function ejercicio1(){

    let numeroAuto = [prompt("Digite el número de autos que ingresarón a la ciudad el dia de hoy:")];
    let placa = [];

    for(let i = 0; i < numeroAuto; i++){
        placa = prompt(`Digita la placa del auto número ${i + 1}\nRecuerda que la placa debe tener 6 digitos.`);

        if(placa[5] == 1 || placa[5] == 2 || placa[5] == 3){
            document.write(`<b>Auto ${i + 1}. Placa:</b> ${placa}, Sticker color <b style="background-color: yellow;">amarillo.</b><br>`);
        }else if(placa[5] == 4 || placa[5] == 5 || placa[5] == 6){
            document.write(`<b>Auto ${i + 1}. Placa:</b> ${placa}, Sticker color <b style="background-color: pink;">rosa.</b><br>`);
        }else if(placa[5] == 0 || placa[5] == 7 || placa[5] == 8 || placa[5] == 9){
            document.write(`<b>Auto ${i + 1}. Placa:</b> ${placa}, Sticker color <b style="background-color: red;">rojo.</b><br>`);
        }else{
            document.write(`<b>Auto ${i + 1}:</b><b style="color: red;"> Error al digitar la placa.</b><br>`);
        }
    }

    // for(let i = 0; i < numeroAuto; i++){
    //     // placa = [numeroAuto];
    //     placa[i] = [prompt(`Digita la placa del auto número ${i + 1}\nRecuerda que la placa debe tener 6 digitos.`)];
        
    // }
    // // document.write(placa + "<br>");
    // document.write(placa[0][0]);
}
ejercicio1();

function ejercicio2(){
    let a = 0, i = 0;
    
    while(i < 10){
        a += 3;
        a--;

        i++;
    }
    alert(`El resultado es ${a}`);
}

 function ejercicio3(){
    let a = 4, b = 6, k = 0, res = 1;

    for(a; a <= b; a++){
        res = res * k;
    }
    document.write(`El resutado es: ${res}`);
}

