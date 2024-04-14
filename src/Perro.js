
const Ianimal = require('./Ianimal'); // Ajusta la ruta según sea necesario

class Perro extends Ianimal {
    constructor(nombre,edad) {
        super(nombre);
        this.edad = edad;
        this.nombre = nombre;
       
    }
    getNombre() {  
        return this.nombre;
    }
    setNombre(nombre) {
        return this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        return this.edad = edad;
    }
    ruido() {  
        return 'Guau Guau';
    }
    comer() {
        return 'Comiendo carne';
    }
    aceptar(visitor){
        return visitor.visitarPerro(this);
    }
    }

module.exports = Perro;