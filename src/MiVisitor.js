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
  
    aceptar(visitarProducto) {
      
        this.total+= visitarProducto.getPrecio();// Devuelve el precio del producto para poder utilizarlo en otras operaciones
        this.totalNombre += visitarProducto.getNombre();
      }
  
  aceptarDescuento(visitarDescuento){
    const producto = visitarDescuento.producto; // Obtiene el producto al que se aplica el descuento
    this.totalCantidad = visitarDescuento.getCantidad();
    const descuentoTotal = producto.getPrecio()*visitarDescuento.getCantidad();
    this.totalDescuento -= descuentoTotal-producto.getPrecio();
  }

  aceptarImpuesto1(visitarImpuesto) {
    const producto = visitarImpuesto.producto; // Obtiene el producto al que se aplica el impuesto
   const impuestoTotal = producto.getPrecio()*visitarImpuesto.getTasa();
   this.total += impuestoTotal+producto.getPrecio();
    this.totalTasa += visitarImpuesto.getTasa();
    }
  }


  
  module.exports = { MiVisitor, visitor }; // Exporta las clasesS