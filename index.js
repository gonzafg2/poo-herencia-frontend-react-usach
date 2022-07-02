// DRY
// Don't repeat yourself

// Clases y Superclases (super (método) - extends)

class Animal {
  constructor(nombre, tipo, especie) {
    this.__nombre = () => nombre;
    this.tipo = tipo;
    this.especie = especie;
  }
  get nombre() {
    return this.__nombre();
  }
  comer() {
    console.log(`${this.nombre} está comiendo`);
  }
}

// Clase Animal
class Perro extends Animal {
  constructor(nombre, tipo, especie, imagen) {
    super(nombre, tipo, especie);
    this.imagen = imagen;
  }
  ladrar() {
    console.log(`${this.nombre} esta ladrando`);
  }
}
const canito = new Perro("Canito", "perro", "quiltro", "canito.jpg");
console.log(canito)
canito.comer()

class Gato extends Animal {
  constructor(nombre, tipo, especie, imagen, nombreDuenno) {
    super(nombre, tipo, especie);
    this.imagen = imagen;
    this.nombreDuenno = nombreDuenno;
  }
  maullar() {
    console.log(`${this.nombre} esta maullando`);
  }
}
const frijol = new Gato("Frijol", "gato", "pelo corto", "frijol.jpg", "Gonzalo");
console.log("Nombre: ", frijol.nombre);
frijol.comer();

class Leon {
  constructor(cazador) {
    this.cazador = cazador;
  }
  volar() {
    console.log(`${this.nombre} esta volando`);
  }
}
