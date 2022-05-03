
class animales {
  constructor(especie, color, edad, nombre, hablar){
    this.especie = especie;
    this.color = color;
    this.edad = edad;
    this.nombre = nombre;
    this.info = `Tengo un <b>${this.especie}</b>, se llama <b>${this.nombre}</b>, tiene <b>${this.edad}</b> años y es de color <b>${this.color}</b>.`;
    this.hablar= hablar;
  }
  verInfo(){
    document.write(this.info + "<br>");
  }
  hablarAnimal(){
    document.write(`El ${this.especie} ${this.hablar}<hr>`);
  }
}

class perro extends animales{
  constructor(especie, color, edad, nombre, hablar){
    super(especie, hablar);
    this.hablar = hablar;
  }
  // ladrar(){
  //   alert(`El ${this.especie} ${this.hablar}`);
  // }

// METODO SETTER
  set setHablar(newHAblar){
    this.hablar = newHAblar;
  }

  // METODO GETTER
  get getHablar(){
    return this.hablar;
  }
}

const perro1 = new perro("perro", "negro", 1, "Netero", "Ladra");
const perro2 = new animales("perro", "negro", 3, "Maxi", "Ladra");
const gato = new animales("gato", "blanco", 12, "Pacho", "Mauya");
const loro = new animales("loro", "verde", 3, "Manolo", "Chifla");

perro1.setHablar = "Aaaaa";
alert(perro1.hablar);


// perro1.verInfo();

// loro.hablarAnimal();
// perro1.ladrar();


// document.write(perro2.informacion + "<br>");
// document.write(perro1.informacion + "<br>");
// document.write(gato.informacion + "<br>");
// document.write(loro.informacion + "<br>");
