function ordine (data, pasto) {
    this.data = data || null;
    this.pasti = [];
    this.pasti.push(pasto);
}

module.exports = ordine;