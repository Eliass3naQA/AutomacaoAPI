class Amostra {
  getAmostraXml({ descricao, material, codigoBarras, identificacao, exames }) {
    return `
      <amostra descricao="${descricao}" material="${material}" codigoBarras="${codigoBarras}" identificacao="${identificacao}">
        ${exames.map(this.getExameXml).join('')}
      </amostra>`;
  }

  getExameXml({ codigo, dadosadicionais, idlis, urgente }) {
    return `<exame codigo="${codigo}" dadosadicionais="${dadosadicionais}" idlis="${idlis}" urgente="${urgente}"/>`;
  }
}

export default new Amostra();
