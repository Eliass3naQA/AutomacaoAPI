# Autor: ELIAS SENA SILVA

# 🧪 Automação de Testes de API - Solicitações de Exames

Este projeto tem como objetivo automatizar os testes de uma API de exames, utilizando **Cypress** com suporte a **requisições XML**, estruturado com **Page Object Model (POM)** para manter o código limpo, reutilizável e escalável.

---

##  Funcionalidades Automatizadas

Atualmente a automação cobre os seguintes cenários:

-  Criação de solicitações de exames
-  Atualização de solicitações existentes
-  Exclusão de solicitações
-  Validações de dados como paciente, médico, amostra, exames e cabeçalho

O projeto está em expansão contínua para atender múltiplos fluxos de testes via API.

---

##  Tecnologias Utilizadas

- Cypress
- JavaScript
- XML (via corpo de requisição)
- Estrutura Page Object Model (POM)
- Node.js (ambiente de execução)

---

##  Estrutura do Projeto

/automacao-api/
├── cypress/
│   ├── e2e/
│   │   └── criarSolicitacao.cy.js      # Caso de teste principal
│   ├── support/
│   │   ├── commands.js                  # Comandos customizados Cypress
│   │   └── e2e.js                       # Arquivo padrão do Cypress
│   └── pageObjects/                    # Métodos reutilizáveis por área
│       ├── agente.js
│       ├── entidade.js
│       ├── paciente.js
│       ├── medico.js
│       ├── solicitacao.js
│       └── amostra.js
├── cypress.config.js                   # Configurações Cypress
├── package.json                        # Dependências e scripts
├── .gitignore                          # Ignora arquivos locais
└── README.md                           # Este documento

## Como Executar Localmente

- git clone https://github.com/seu-usuario/seu-repositorio.git
- cd seu-repositorio
- npm install
- npx cypress open


## Como Estender o Projeto
- Para criar novos testes:
Crie um novo .cy.js dentro de cypress/e2e/.

- Importe os pageObjects e reutilize os métodos existentes.

- Use cy.request() para fazer requisições XML com os parâmetros desejados.