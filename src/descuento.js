const visitor = require('./visitor');
class descuento extends visitor{
    constructor(cantidad){
        super();
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
