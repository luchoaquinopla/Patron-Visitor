const visitor = require('./visitor');
class impuesto extends visitor {
    constructor(tasa) {
      super();
      this.tasa = tasa;
    }
    getTasa() {
        return this.tasa;
    }
    setTasa(tasa) {
        this.tasa = tasa;
    }
    aceptar(visitor) {
      visitor.visitarImpuesto(this);
    }
  }
  module.exports = impuesto;