class Solicitacao {
  getSolicitacaoXml({ codigolis, codigopaciente, crm, postoDeColeta, data, dataColeta }) {
    return `<solicitacao codigolis="${codigolis}" codigopaciente="${codigopaciente}" crm="${crm}" postoDeColeta="${postoDeColeta}" data="${data}" dataColeta="${dataColeta}">`;
  }
}

export default new Solicitacao();
