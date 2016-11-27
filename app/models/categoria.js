function categoria (id, nome, qnta, avvertenze) {
  this.nome = nome;
  this.errors = [];
}

exports.categoria = createCategoria;
