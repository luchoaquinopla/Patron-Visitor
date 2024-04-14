const visitor = require("./visitor");

class MiVisitor extends visitor {
    constructor() {
      super(); // Llama al constructor de la clase base
      this.total = 0;
      this.totalNombre = ''
      this.totalTasa = 0;
      this.totalCantidad = 0;
      this.totalDescuento = 0;
    }
  
    visitarProducto(producto) {
      
        this.total+= producto.getPrecio();// Devuelve el precio del producto para poder utilizarlo en otras operaciones
        this.totalNombre += producto.getNombre();
      }
  
      visitarDescuento(descuento){
    const producto = descuento.producto; // Obtiene el producto al que se aplica el descuento
    this.totalCantidad = descuento.getCantidad();
    const descuentoTotal = producto.getPrecio()*descuento.getCantidad();
    this.totalDescuento -= descuentoTotal-producto.getPrecio();
  }

  visitarImpuesto(impuesto) {
    const producto = impuesto.producto; // Obtiene el producto al que se aplica el impuesto
   const impuestoTotal = producto.getPrecio()*impuesto.getTasa();
   this.total += impuestoTotal+producto.getPrecio();
    this.totalTasa += impuesto.getTasa();
    }
  }


  
  module.exports = { MiVisitor, visitor }; // Exporta las clasesS