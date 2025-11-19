# Automação de Testes API - ServeRest

Projeto de testes automatizados de API REST usando Cypress para validar os principais endpoints da plataforma ServeRest.

**API testada:** [serverest.dev](https://serverest.dev)

## Tecnologias

- Cypress 13.x
- JavaScript (ES6+)
- Node.js 14+
- Service Objects Pattern
- Faker.js (geração de dados dinâmicos)
- Mochawesome (relatórios HTML)

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

### Login (2 testes implementados)
- Login com credenciais válidas
- Login com credenciais inválidas

**Cenários mapeados:** 13 adicionais (validação de token, rate limiting, XSS, SQL injection, etc.)

---

### Usuários (2 testes implementados)
- Criar usuário com sucesso
- Tentar cadastrar email duplicado

**Cenários mapeados:** 26 adicionais (CRUD completo, filtros, validações de campos, performance, etc.)

---

### Produtos (2 testes implementados)
- Criar produto com usuário admin
- Listar produtos com filtros

**Cenários mapeados:** 28 adicionais (CRUD completo, validações de permissão, estoque, preços, etc.)

---

### Carrinhos (2 testes implementados)
- Criar carrinho com sucesso
- Tentar adicionar produto inexistente

**Cenários mapeados:** 26 adicionais (validações de estoque, múltiplos produtos, cancelamento, conclusão, etc.)

---

## Padrões Utilizados

**Service Objects Pattern**

Cada endpoint possui sua classe service com métodos encapsulados. Facilita manutenção - se a API mudar, basta alterar em um único lugar.

**Custom Commands**

Comandos personalizados para validações recorrentes, geração de dados dinâmicos e operações comuns entre os testes.

**Fixtures**

Massa de dados separada dos testes, permitindo fácil manutenção e reutilização em diferentes cenários.

**Organização**

Separação clara entre cenários críticos e adicionais. Uso de hooks para setup/cleanup. Nomenclatura descritiva.

## Status dos Testes

**8/8 testes implementados passando (100%)**

- login.cy.js: 2/2
- usuarios.cy.js: 2/2
- produtos.cy.js: 2/2
- carrinhos.cy.js: 2/2

**93 cenários mapeados** para futuras implementações

## Validações

- Status code das requisições
- Estrutura do response body
- Headers HTTP
- Tipos de dados (schema validation)
- Regras de negócio da API
- Tempo de resposta (performance)
- Autorização e autenticação
- Tratamento de erros

## Melhorias Futuras

- Implementação dos 93 cenários mapeados
- Integração com CI/CD (GitHub Actions)
- Testes de carga e performance
- Validação de contratos com JSON Schema
- Cobertura de testes de segurança (OWASP)
- Dockerização do ambiente

---

**Filipe Malta**  
QA Pleno  
[GitHub](https://github.com/FilipeMalta) | filipe.fm.malta@gmail.com
