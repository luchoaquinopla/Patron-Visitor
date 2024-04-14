const Ivisitor = require('./Ivisitor');
class visitanteGato extends Ivisitor {
    constructor(){
       super();
       this.totalNombre ='';
       this.totalEdad = 0;
       this.edad =0;
       this.ruido ='';
       this.comida ='';
    }
    visitarGato(gato){
       this.totalNombre += gato.getNombre();
       this.totalEdad = gato.getEdad()*7;
       this.edad = gato.getEdad();
       this.ruido = gato.ruido();
       this.comida = gato.comer();
 
 }
}
module.exports = visitanteGato;