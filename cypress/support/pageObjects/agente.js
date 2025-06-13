class Agente {
  getAgenteXml({ datahora, idagente, lis, operador, senha, versao }) {
    return `<solicitacoes datahora="${datahora}" idagente="${idagente}" lis="${lis}" operador="${operador}" senha="${senha}" versao="${versao}">`;
  }
}

export default new Agente();
