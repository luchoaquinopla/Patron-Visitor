const visitor = require("./visitor");

class MiVisitor extends visitor {
    constructor() {
      super(); // Llama al constructor de la clase base
      this.total = 0;
    }
  
    aceptar(visitarProducto) {
      
        this.total+= visitarProducto.getPrecio(); // Devuelve el precio del producto para poder utilizarlo en otras operaciones
    }
   
    aceptarImpuesto(visitarImpuesto){
    
      this.total+= visitarImpuesto.getTasa();
  }
  

  
  aceptarDescuento(visitarDescuento){
    
    this.total+= visitarDescuento.getCantidad();
  }
}
  
  module.exports = { MiVisitor, visitor }; // Exporta las clasesS