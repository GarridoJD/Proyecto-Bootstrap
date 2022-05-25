
let valorProg = prompt("Valor programado:");
document.write(`Valor Programado: <b style="color: green;">$${valorProg}</b><br><hr>`);

let valorfuentes = 0;
let fuentes = "";
let relacion = [];
let sumatoria = 0;

let cantFuente = prompt("Numero de Fuentes.");
if(cantFuente >= 2){
    let i = 0;
    for(i; i < cantFuente; i++){
        relacion[i] = [fuentes = prompt("Nombre de la fuente:"), valorfuentes = prompt("Valor de la fuente:")];
        if(relacion.length >= 2){
            sumatoria = parseFloat(sumatoria) + parseFloat(relacion[i][1]);
        }else{
            sumatoria = relacion[i][1];
        }
    }
    for(let recorrido of relacion){
        document.write(`- <b>Fuente:</b> ${recorrido[0]}<br>- <b>Valor Fuente:</b> <b style="color: green">$${recorrido[1]}</b><br>.<hr>`);
    }
    if(sumatoria === valorProg){
        document.write(`<b>Valor programado total:</b> <b style="color: green;">$${sumatoria}</b><br>`);
    }else{
        document.write(`ERROR! La suma del valor de las fuentes no es igual al valor programado: <b style="color: red;">$${sumatoria} != ${valorProg}</b><br>`);
    }
   

}else{
    relacion[0] = [fuentes = prompt("Nombre de la fuente:"), valorfuentes = prompt("Valor de la fuente:")];
    if(valorfuentes === valorProg){
        // document.write(`<b>Valor de la fuente:</b> <b style="color: green;">$${valorfuentes}</b><br>`);
        for(let recorrido of relacion){
            document.write(`- <b>Fuente:</b> ${recorrido[0]}<br> - <b>Valor Fuente:</b> <b style="color: green;">$${recorrido[1]}</b><br>`);
        } 
    }else{
        document.write(`<b>El valor de la fuente no es igual al valor programado.</b><br>
        (<b style="color: red;">$${valorfuentes} != $${valorProg}</b>)`);
    }
}
