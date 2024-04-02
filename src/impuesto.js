class impuesto {
    constructor(tasa) {
      this.tasa = tasa;
    }
    getTasa() {
        return this.tasa;
    }
    setRate(tasa) {
        this.tasa = tasa;
    }
  }
  module.exports = impuesto;