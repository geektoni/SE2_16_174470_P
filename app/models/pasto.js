function pasto (id, nome, descrizione, fotoURL, videoURL, categoria) {
  this.id = id;
  this.nome = nome;
  this.descrizione = descrizione;
  this.fotoURL = fotoURL;
  this.videoURL = videoURL;
  this.categoria = this.categoria;
  this.errors = [];
}

exports.pasto = createPasto;
