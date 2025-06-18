import agente from '../pageObjects/agente';
import entidade from '../pageObjects/entidade';
import paciente from '../pageObjects/paciente';
import medico from '../pageObjects/medico';
import solicitacao from '../pageObjects/solicitacao';
import amostra from '../pageObjects/amostra';

Cypress.Commands.add('criarSolicitacaoExameHEMOC', (dados) => {
  
  const datahora = new Date().toISOString();
  const timestamp = Date.now();
  const randomInt = Math.floor(Math.random() * 1000);
  const codigolisSolicitacao = `${timestamp}${randomInt}`;

  const headerXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  const xmlBody =
    agente.getAgenteXml({ ...dados.agente, datahora }) +
    entidade.getEntidadeXml(dados.entidade.codigo) +
    paciente.getPacientesXml(dados.pacientes) +
    medico.getMedicosXml(dados.medicos) +
    solicitacao.getSolicitacaoXml({
      ...dados.solicitacao,
      codigolis: codigolisSolicitacao
    }) +
    amostra.getAmostraXml(dados.amostra) +
    '</solicitacao></entidade></solicitacoes>';

  const finalXml = headerXml + xmlBody;

  cy.request({
    method: 'PUT',
    url: 'http://ap-aolws.azr-hml02.dasaexp.io/webserviceaol/rest/homologacao',
    headers: {
      'Content-Type': 'application/xml',
      Authorization: 'Basic Og==',
    },
    body: finalXml,
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.log('Solicitação criada com sucesso!');
    expect(response.body).to.include('informacao="Exame(s): HEMOC - Incluído(s) com sucesso!"');
    cy.log('Response status:', response.status);
    cy.log('Response headers:', response.headers);
    cy.log('Response body:', response.body);
    
  });
});
