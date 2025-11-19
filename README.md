# Automação de Testes API - ServeRest

Projeto de testes automatizados de API usando Cypress para validar os principais fluxos da API ServeRest.

**API testada:** [serverest.dev](https://serverest.dev)

## Tecnologias

- Cypress
- JavaScript
- Node.js
- Faker.js (dados dinâmicos)
- Mochawesome (relatórios)

## Pré-requisitos

- Node.js 14 ou superior
- npm ou yarn
- Git

## Instalação

```bash
git clone https://github.com/FilipeMalta/desafio-api-QA.git
cd desafio-api-QA
npm install
```

## Como executar

**Modo interativo:**
```bash
npm run cy:open
```

**Modo headless:**
```bash
npm run test
```

**Testes específicos:**
```bash
npm run test:login
npm run test:usuarios
npm run test:produtos
npm run test:carrinhos
```

**Gerar relatório:**
```bash
npm run report
```

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── usuarios.cy.js
│   ├── produtos.cy.js
│   └── carrinhos.cy.js
├── fixtures/
│   ├── users.json
│   ├── products.json
│   └── carts.json
├── services/
│   ├── LoginService.js
│   ├── UserService.js
│   ├── ProductService.js
│   └── CartService.js
└── support/
    ├── commands.js
    └── e2e.js
```

## Cenários de Teste

### Login (2 testes)
- Login com credenciais válidas
- Login com credenciais inválidas

---

### Usuários (2 testes)
- Criar usuário com sucesso
- Validar erro ao tentar cadastrar email duplicado

---

### Produtos (2 testes)
- Criar produto com usuário admin autenticado
- Listar produtos com filtros

---

### Carrinhos (2 testes)
- Criar carrinho com sucesso
- Validar erro ao adicionar produto inexistente

---

## Organização do Código

**Services**

Criei classes para cada endpoint (UserService, ProductService, etc) para organizar melhor as chamadas da API e evitar repetição de código.

**Custom Commands**

Alguns comandos customizados para facilitar tarefas repetitivas como login, criação de usuário admin e geração de emails únicos.

**Fixtures**

Arquivos JSON com dados de exemplo para usar nos testes.

**Hooks**

Uso de beforeEach e afterEach para preparar e limpar os dados de teste.

## Cobertura de Testes

**8 testes implementados**

- login.cy.js: 2 testes
- usuarios.cy.js: 2 testes
- produtos.cy.js: 2 testes
- carrinhos.cy.js: 2 testes

## O que é validado

- Status code das respostas
- Mensagens de erro e sucesso
- Estrutura dos dados retornados
- Regras de negócio (ex: não permitir email duplicado)
- Autenticação e autorização

## Próximos passos

- Adicionar mais cenários (deletar usuário, atualizar produto, etc)
- Integrar com CI/CD
- Melhorar os relatórios

---

**Filipe Malta**  
QA Pleno  
[GitHub](https://github.com/FilipeMalta) | filipe.fm.malta@gmail.com
