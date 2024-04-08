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
    aceptar(visitor) {
        visitor.visitarDescuento(this);
      }
    }
    module.exports = descuento; 
