function pasto (id, nome, descrizione, fotoURL, videoURL, categoria) {
  this.id = id;
  this.nome = nome;
  this.descrizione = descrizione;
  this.fotoURL = fotoURL;
  this.videoURL = videoURL;
  this.categoria = categoria;
  this.errors = [];
}

module.exports = pasto;
