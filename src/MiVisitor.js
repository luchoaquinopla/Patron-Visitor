const visitor = require("./visitor");

class MiVisitor extends visitor {
    constructor() {
      super(); // Llama al constructor de la clase base
      this.total = 0;
    }
  
    visitarProducto(producto) {
      this.total += producto.getPrecio();
        return producto.getPrecio(); // Devuelve el precio del producto para poder utilizarlo en otras operaciones
    }
  
    visitarImpuesto(impuesto) {
      const producto = impuesto.producto;
      const impuestoTotal = producto.getPrecio() * impuesto.getTasa();
      this.total = impuestoTotal + producto.getPrecio();
  }
  
    visitarDescuento(descuento) {
      const producto = descuento.producto;
      const descuentoTotal = descuento.getCantidad() * producto.getPrecio();
      this.total = producto.getPrecio() - descuentoTotal;
    }
  }
  
  module.exports = { MiVisitor, visitor }; // Exporta las clasesS