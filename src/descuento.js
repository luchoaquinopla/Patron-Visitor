class descuento {
    constructor(cantidad){
        this.cantidad = cantidad
    }
    getCantidad(){
        return this.cantidad
    }
    setCantidad(cantidad){
        this.cantidad = cantidad
    }
    aceptarDescuento(visitor) {
        visitor.visitarDescuento(this);
      }
    }
    module.exports = descuento; 
