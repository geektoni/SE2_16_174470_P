function ingrediente (id, nome, qnta, avvertenze) {
  this.id = id;
  this.nome = nome;
  this.qnta = qnta;
  this.avvertenze = avvertenze;
  this.errors = [];
}

module.exports = ingrediente;
