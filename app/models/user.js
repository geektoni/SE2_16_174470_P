function user (id, nome, cognome) {
  this.id = id;
  this.nome = nome;
  this.cognome = cognome;
  this.errors = [];
}

exports.user = createUser;
