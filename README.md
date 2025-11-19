# Desafio API - QA Pleno

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

Projeto de automação de testes de API REST utilizando Cypress para validação dos endpoints da API [ServeRest](https://serverest.dev).

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução dos Testes](#execução-dos-testes)
- [Cenários de Testes](#cenários-de-testes)
- [Relatórios](#relatórios)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio técnico para QA Pleno, focando em testes automatizados de API REST. O objetivo é validar os principais fluxos e regras de negócio dos endpoints de Login, Usuários, Produtos e Carrinhos da API ServeRest.

### API Base
- **URL**: https://serverest.dev
- **Documentação**: https://serverest.dev

## 🚀 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** - Framework de testes end-to-end
- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** - Gerador de relatórios HTML
- **[@faker-js/faker](https://fakerjs.dev/)** - Geração de dados fake para testes

## 📁 Estrutura do Projeto

```
desafio-api-QA/
│
├── cypress/
│   ├── e2e/                    # Arquivos de teste
│   │   ├── login.cy.js         # Testes de Login
│   │   ├── usuarios.cy.js      # Testes de Usuários
│   │   ├── produtos.cy.js      # Testes de Produtos
│   │   └── carrinhos.cy.js     # Testes de Carrinhos
│   │
│   ├── fixtures/               # Dados de teste (massa de dados)
│   │   ├── users.json
│   │   ├── products.json
│   │   └── carts.json
│   │
│   ├── services/               # Service Objects (abstração dos endpoints)
│   │   ├── LoginService.js
│   │   ├── UserService.js
│   │   ├── ProductService.js
│   │   └── CartService.js
│   │
│   └── support/                # Comandos customizados e configurações
│       ├── commands.js         # Custom commands
│       └── e2e.js             # Configurações globais
│
├── cypress.config.js           # Configurações do Cypress
├── package.json               # Dependências do projeto
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Documentação do projeto
```

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Git**

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/FilipeMalta/desafio-api-QA.git
cd desafio-api-QA
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Execução dos Testes

### Modo Headless (linha de comando)
```bash
npm run test
```

### Modo Interativo (Cypress Test Runner)
```bash
npm run cy:open
```

### Executar testes específicos
```bash
# Apenas testes de Login
npm run test:login

# Apenas testes de Usuários
npm run test:usuarios

# Apenas testes de Produtos
npm run test:produtos

# Apenas testes de Carrinhos
npm run test:carrinhos
```

### Gerar relatório HTML
```bash
npm run report
```

## 📊 Cenários de Testes

### 🔐 LOGIN

#### Cenários Críticos Automatizados:
1. ✅ **CT01** - Deve realizar login com sucesso com credenciais válidas
2. ✅ **CT02** - Não deve realizar login com credenciais inválidas

#### Cenários Adicionais Levantados:
3. Login com email não cadastrado
4. Login com senha incorreta
5. Login sem informar email
6. Login sem informar senha
7. Login com email em formato inválido
8. Validação do token gerado no login
9. Login com campos vazios
10. Login com SQL Injection
11. Login com XSS
12. Validação de rate limiting (múltiplas tentativas)
13. Validação de expiração do token
14. Login com caracteres especiais na senha
15. Login case sensitive no email

---

### 👥 USUÁRIOS

#### Cenários Críticos Automatizados:
1. ✅ **CT01** - Deve criar um novo usuário com sucesso
2. ✅ **CT02** - Não deve permitir cadastrar usuário com email duplicado

#### Cenários Adicionais Levantados:
3. Listar todos os usuários cadastrados
4. Buscar usuário por ID existente
5. Buscar usuário por ID inexistente
6. Criar usuário sem informar nome
7. Criar usuário sem informar email
8. Criar usuário com email em formato inválido
9. Criar usuário sem informar senha
10. Criar usuário sem informar campo administrador
11. Criar usuário administrador
12. Criar usuário comum (não administrador)
13. Atualizar dados de um usuário existente
14. Atualizar usuário com email já utilizado por outro
15. Atualizar usuário inexistente
16. Deletar usuário existente
17. Deletar usuário inexistente
18. Deletar usuário que possui carrinho ativo
19. Filtrar usuários por nome
20. Filtrar usuários por email
21. Filtrar usuários administradores
22. Validar paginação de usuários
23. Criar usuário com nome muito longo
24. Criar usuário com senha fraca
25. Validar campos obrigatórios
26. Validar tipos de dados dos campos
27. Criar múltiplos usuários em sequência
28. Validar performance de listagem com muitos usuários

---

### 📦 PRODUTOS

#### Cenários Críticos Automatizados:
1. ✅ **CT01** - Deve criar um novo produto com usuário autenticado admin
2. ✅ **CT02** - Deve listar produtos com filtros aplicados

#### Cenários Adicionais Levantados:
3. Criar produto sem autenticação
4. Criar produto com usuário não administrador
5. Criar produto com token inválido
6. Criar produto com token expirado
7. Listar todos os produtos
8. Buscar produto por ID existente
9. Buscar produto por ID inexistente
10. Criar produto sem informar nome
11. Criar produto sem informar preço
12. Criar produto sem informar descrição
13. Criar produto sem informar quantidade
14. Criar produto com preço negativo
15. Criar produto com preço zero
16. Criar produto com quantidade negativa
17. Criar produto com nome duplicado
18. Atualizar produto existente
19. Atualizar produto inexistente
20. Atualizar produto sem autenticação
21. Deletar produto existente
22. Deletar produto inexistente
23. Deletar produto que está em carrinho ativo
24. Filtrar produtos por nome
25. Filtrar produtos por preço
26. Filtrar produtos por quantidade
27. Validar paginação de produtos
28. Criar produto com descrição muito longa
29. Validar campos obrigatórios
30. Validar tipos de dados dos campos

---

### 🛒 CARRINHOS

#### Cenários Críticos Automatizados:
1. ✅ **CT01** - Deve criar um carrinho com sucesso
2. ✅ **CT02** - Não deve permitir criar carrinho com produto inexistente

#### Cenários Adicionais Levantados:
3. Criar carrinho sem autenticação
4. Criar carrinho com token inválido
5. Criar carrinho com token expirado
6. Listar todos os carrinhos
7. Buscar carrinho por ID existente
8. Buscar carrinho por ID inexistente
9. Criar carrinho vazio (sem produtos)
10. Criar carrinho com múltiplos produtos
11. Criar carrinho com produto duplicado
12. Criar carrinho com quantidade maior que o estoque
13. Criar carrinho com quantidade zero
14. Criar carrinho com quantidade negativa
15. Criar segundo carrinho com usuário que já possui carrinho ativo
16. Cancelar compra (deletar carrinho)
17. Concluir compra (deletar carrinho)
18. Validar que produtos voltam ao estoque ao cancelar compra
19. Validar que produtos não voltam ao estoque ao concluir compra
20. Validar que concluir compra libera o usuário para novo carrinho
21. Criar carrinho com produto sem estoque
22. Validar cálculo do valor total do carrinho
23. Validar atualização de estoque ao criar carrinho
24. Validar campos obrigatórios
25. Validar estrutura do array de produtos
26. Filtrar carrinhos por ID de produto
27. Validar paginação de carrinhos
28. Performance com carrinho com muitos produtos

---

## 📈 Relatórios

Os relatórios são gerados automaticamente após a execução dos testes:

- **HTML Report**: `cypress/reports/mochawesome/index.html`
- **Screenshots**: `cypress/screenshots/` (em caso de falhas)
- **Vídeos**: `cypress/videos/` (quando habilitado)

Para visualizar o relatório HTML:
```bash
npm run report
```

## 🎯 Padrões e Boas Práticas Utilizadas

### Service Objects Pattern
- Abstração dos endpoints da API em classes de serviço
- Facilita manutenção e reutilização de código
- Separação de responsabilidades

### Custom Commands
- Comandos reutilizáveis para operações comuns
- Validação de schemas
- Geração de dados dinâmicos

### Fixtures
- Massa de dados separada dos testes
- Facilita manutenção dos dados de teste
- Permite reutilização em diferentes cenários

### Organização dos Testes
- Separação por contexto (Cenários Críticos vs Adicionais)
- Nomenclatura clara e descritiva
- Hooks (before, after, beforeEach, afterEach) para setup e cleanup

### Validações Completas
- Status code
- Response body
- Headers
- Tipos de dados
- Tempo de resposta
- Regras de negócio

## 👨‍💻 Autor

**Filipe Malta**

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

**Desenvolvido com ❤️ e Cypress**
