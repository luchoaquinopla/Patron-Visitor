class visitor {
visitarProducto() {}
visitarImpuesto() {}
visitarDescuento() {}
aceptar(visitor) {}
aceptarImpuesto(visitor) {}
aceptarDescuento(visitor) {}
    
  }
  module.exports = visitor;    