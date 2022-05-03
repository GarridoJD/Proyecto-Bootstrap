
// const title = document.getElementById('title').querySelector("span");
// const parrafoSpan = document.getElementById("parrafo").querySelector('span'); // SE ACCEDE DIRECTAMNETE AL ELEMENTO SIN NECESIDAD DE DECLARAR UNA CLASE.

// console.log(title.textContent);
// console.log(parrafoSpan.textContent);

const inputs = document.querySelector('input');

inputs.setAttribute('type', 'date'); // CAMBIA EL TIPO DE DATO.
let tipoDato = inputs.getAttribute('type'); // DEVUELVE EL TIPO DE DATO.
inputs.removeAttribute('type'); // REMUEVE O ELIMINA EL ATRIBUTO.

console.log(tipoDato);