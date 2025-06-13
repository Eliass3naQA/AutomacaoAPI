class Entidade {
  getEntidadeXml(codigo) {
    return `<entidade codigo="${codigo}">`;
  }
}

export default new Entidade();
