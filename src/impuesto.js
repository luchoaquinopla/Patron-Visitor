class impuesto {
    constructor(tasa) {
      this.tasa = tasa;
    }
    getTasa() {
        return this.tasa;
    }
    setTasa(tasa) {
        this.tasa = tasa;
    }
  }
  module.exports = impuesto;