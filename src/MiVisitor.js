const visitor = require("./visitor");

class MiVisitor extends visitor {
    constructor() {
      super(); // Llama al constructor de la clase base
      this.total = 0;
    }
  
    visitarProducto(producto) {
      this.total += producto.precio;
      return producto.precio; // Devuelve el precio del producto para poder utilizarlo en otras operaciones
    }
  
    visitarImpuesto(tasa, precio) {
      const impuestoTotal = precio * tasa;
      this.total = precio + impuestoTotal;
  }
  
    visitarDescuento(descuento,precio) {
      const descuentoTotal = precio*descuento - precio;
      this.total -= descuentoTotal;
    }
  }
  
  module.exports = { MiVisitor, visitor }; // Exporta las clasesS