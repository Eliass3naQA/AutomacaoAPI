describe('API - Criar Solicitação de Exames', () => {
  it('Deve criar uma solicitação válida com sucesso', () => {
    cy.criarSolicitacaoExame({
      agente: {
        idagente: '179341',
        lis: 'NOME_LIS',
        operador: 'NOME_OPERADOR',
        senha: '12CC97',
        versao: '20190215'
      },
      entidade: {
        codigo: '1789'
      },
      pacientes: [
        {
          codigolis: '123456X',
          datanasc: '2024-10-13',
          nome: 'PACIENTE_TEST',
          cpf: '04309636020',
          nomeSocial: 'SOCIAL_NAME_TEST',
          sexo: 'M'
        }
      ],
      medicos: [
        {
          crm: '123456-SP',
          nome: 'NOME_MEDICO2'
        }
      ],
      solicitacao: {
        codigopaciente: '123456X',
        crm: '123456-SP',
        postoDeColeta: 'SulCentro',
        data: '2025-06-05',
        dataColeta: '2025-06-05T12:28:12.316Z'
      },
      amostra: {
        descricao: '',
        material: '543',
        codigoBarras: '',
        identificacao: '',
        exames: [
          {
            codigo: 'TSH',
            dadosadicionais: '',
            idlis: 'Tst-Szk-0006',
            urgente: 'true'
          }
        ]
      }
    });
  });
});
