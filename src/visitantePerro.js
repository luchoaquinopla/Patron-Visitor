const Ivisitor = require('./Ivisitor');
class vistantePerro extends Ivisitor {
    constructor(){
       super();
       this.totalNombre ='';
       this.totalEdad = 0;
       this.edad =0;
       this.ruido ='';
       this.comida ='';
    }
    visitarPerro(perro){
       this.totalNombre += perro.getNombre();
       this.totalEdad = perro.getEdad()*7;
       this.edad = perro.getEdad();
       this.ruido = perro.ruido();
       this.comida = perro.comer();
 
 }
}
module.exports = vistantePerro;