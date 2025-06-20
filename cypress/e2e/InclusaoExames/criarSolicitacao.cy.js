describe('API - Criar Solicitação de Exames', () => {
  it('Solicitação de exame TSH', () => {
    cy.criarSolicitacaoExameTSH({
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
        dataColeta: '2025-06-20T12:28:12.316Z'
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

  it('Solicitação de exame HEMOC', () => {
    cy.criarSolicitacaoExameHEMOC({
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
        dataColeta: '2025-06-20T12:28:12.316Z'
      },
      amostra: {
        descricao: '',
        material: '544',
        codigoBarras: '',
        identificacao: '2',
        exames: [
          {
            codigo: 'HEMOC',
            dadosadicionais: '',
            idlis: 'Tst-Szk-0006',
            urgente: 'false'
          }
        ]
      }
    });
  });

  it('Solicitação de exame T3', () => {
    cy.criarSolicitacaoExameT3({
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
        dataColeta: '2025-06-20T12:28:12.316Z'
      },
      amostra: {
        descricao: '',
        material: '543',
        codigoBarras: '',
        identificacao: '',
        exames: [
          {
            codigo: 'T3',
            dadosadicionais: '',
            idlis: 'Tst-Szk-0006',
            urgente: 'false'
          }
        ]
      }
    });

  });
  it('criarSolicitacaoExameTGO', () => {
    cy.criarSolicitacaoExameTGO({
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
        dataColeta: '2025-06-20T12:28:12.316Z'
      },
      amostra: {
        descricao: 'Teste TGO',
        material: '543',
        codigoBarras: '',
        identificacao: '',
        exames: [
          {
            codigo: 'TGO',
            dadosadicionais: '',
            idlis: 'Tst-Szk-0006',
            urgente: 'false'
          }
        ]
      }
    });
  });

  it('criarSolicitacaoExameT4', () => {
    cy.criarSolicitacaoExameT4({
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
        dataColeta: '2025-06-20T12:28:12.316Z'
      },
      amostra: {
        descricao: 'Teste T4',
        material: '543',
        codigoBarras: '',
        identificacao: '',
        exames: [
          {
            codigo: 'T4',
            dadosadicionais: '',
            idlis: 'Tst-Szk-0006',
            urgente: 'false'
          }
        ]
      }
    });
  });
});
