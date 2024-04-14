const Ianimal = require('./Ianimal'); // Ajusta la ruta según sea necesario

class Gato extends Ianimal {
    constructor(nombre,edad) {
        super(nombre);
        this.edad = edad
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
        return 'miau miau';
    }
    comer() {
        return 'Comiendo pescado';
    }
    aceptar(visitor){
        return visitor.visitarGato(this);
    }
}
module.exports = Gato;