
class celulares{
    constructor(marca, modelo, bateria, espacio, color){
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
        this.espacio = espacio;
        this.color = color;
        this.info = `${this.marca} - ${this.modelo} - ${this.bateria} - ${this.espacio} - color ${this.color}.`;
        this.iniciarApp = false;
    }
    abrirApp(){
        if (this.iniciarApp == false){
            this.iniciarApp = true;
            alert("La app se abrio correctamente.");
        }
    }
    cerrarApp(){
        if (this.iniciarApp == true){
            this.iniciarApp = false;
            alert("La app se cerro correctamente.");
        }
    }
    samsungFun(){
        alert(`El telefono ${this.marca} puede hacer llamadas.`);
    }
    iPhoneFun(){
        alert(`El telefono ${this.marca} puede tomar fotos y hacer videos.`);
    }
    motorolaFun(){
        alert(`El telefono ${this.marca} puede cargar rapido.`);
    }
}

class altaGama extends celulares{
    constructor(marca, color){
        super(marca, color);
        this.marca = marca;
        this.color = color;
        this.info = `${this.marca} - ${this.color}\n`;
    }
    reconocimientoFacial(){
        alert();
    }
}
// CELULARES NORMALES
const samsung = new celulares("Samsumg", "J1Prime", "3000MAH", "16GB", "gris");
const iPhone = new celulares("iPhone", "12", "2000MAH", "128GB", "negro");
const motorola = new celulares("Motorola", "G6", "3500MAH", "32GB", "blanco");

// CELULARES DE ALTA GAMA
const xiaomi = new altaGama("Xiaomi Node10", "Azul");
const iPhonePlus = new altaGama("IPhone14", "blanco");

samsung.abrirApp();
samsung.cerrarApp();

let opcion = prompt(`Tenemos los siguientes telefonos disponibles.\nIndique el numero del telefono que desea ver:
1. ${samsung.info}
2. ${iPhone.info}
3. ${motorola.info}
4. Celulares de alta Gama.`);

if(opcion == 1){
    samsung.samsungFun();
}else if (opcion == 2){
    iPhone.iPhoneFun();
}else if (opcion == 3){
    motorola.motorolaFun();
}else if(opcion == 4){
    alert(xiaomi.info + iPhonePlus.info);
}else{
    alert("Digita bien BOBOGRANDE.");
}