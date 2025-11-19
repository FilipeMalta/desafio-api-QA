# Automação de Testes API - ServeRest# Automação de Testes API - ServeRest



Projeto de testes automatizados para validar os principais fluxos da API ServeRest utilizando Cypress.Projeto de testes automatizados de API usando Cypress para validar os principais fluxos da API ServeRest.



**API testada:** https://serverest.dev**API testada:** [serverest.dev](https://serverest.dev)



---## Tecnologias



## 🚀 Tecnologias- Cypress

- JavaScript

- **Cypress** - Framework de testes- Node.js

- **JavaScript** - Linguagem de programação- Faker.js (dados dinâmicos)

- **Node.js** - Ambiente de execução- Mochawesome (relatórios)

- **Faker.js** - Geração de dados dinâmicos

- **Mochawesome** - Geração de relatórios HTML## Pré-requisitos



---- Node.js 14 ou superior

- npm ou yarn

## 📋 Pré-requisitos- Git



- Node.js versão 14 ou superior## Instalação

- npm ou yarn

- Git```bash

git clone https://github.com/FilipeMalta/desafio-api-QA.git

---cd desafio-api-QA

npm install

## 🔧 Instalação```



```bash## Como executar

# Clonar o repositório

git clone https://github.com/FilipeMalta/desafio-api-QA.git**Modo interativo:**

```bash

# Acessar a pasta do projetonpm run cy:open

cd desafio-api-QA```



# Instalar as dependências**Modo headless:**

npm install```bash

```npm run test

```

---

**Testes específicos:**

## ▶️ Como executar```bash

npm run test:login

### Executar todos os testes (modo headless)npm run test:usuarios

```bashnpm run test:produtos

npm testnpm run test:carrinhos

``````



### Abrir interface do Cypress (modo interativo)**Gerar relatório:**

```bash```bash

npm run cy:opennpm run report

``````



### Executar testes específicos## Estrutura do Projeto

```bash

npm run test:login      # Testes de Login```

npm run test:usuarios   # Testes de Usuárioscypress/

npm run test:produtos   # Testes de Produtos├── e2e/

npm run test:carrinhos  # Testes de Carrinhos│   ├── login.cy.js

```│   ├── usuarios.cy.js

│   ├── produtos.cy.js

### Gerar relatório HTML│   └── carrinhos.cy.js

```bash├── fixtures/

npm run report│   ├── users.json

```│   ├── products.json

│   └── carts.json

---├── services/

│   ├── LoginService.js

## 📁 Estrutura do Projeto│   ├── UserService.js

│   ├── ProductService.js

```│   └── CartService.js

cypress/└── support/

├── e2e/                    # Arquivos de teste    ├── commands.js

│   ├── login.cy.js    └── e2e.js

│   ├── usuarios.cy.js```

│   ├── produtos.cy.js

│   └── carrinhos.cy.js## Cenários de Teste

├── fixtures/               # Dados estáticos para testes

│   ├── users.json### Login (2 cenários críticos)

│   ├── products.json**CT01** - Login com credenciais válidas  

│   └── carts.json**CT02** - Login com credenciais inválidas

├── services/               # Classes para organizar chamadas da API

│   ├── LoginService.js---

│   ├── UserService.js

│   ├── ProductService.js### Usuários (2 cenários críticos)

│   └── CartService.js**CT01** - Criar usuário com sucesso  

└── support/                # Comandos customizados e configurações**CT02** - Validar erro ao tentar cadastrar email duplicado

    ├── commands.js

    └── e2e.js---

```

### Produtos (2 cenários críticos)

---**CT01** - Criar produto com usuário admin autenticado  

**CT02** - Listar produtos com filtros aplicados

## 🧪 Cenários de Teste Implementados

---

### Login

- **CT01** - Login com credenciais válidas### Carrinhos (2 cenários críticos)

- **CT02** - Login com credenciais inválidas**CT01** - Criar carrinho com sucesso  

**CT02** - Validar erro ao adicionar produto inexistente no carrinho

### Usuários

- **CT01** - Criar usuário com sucesso---

- **CT02** - Validar erro ao cadastrar email duplicado

## Organização do Código

### Produtos

- **CT01** - Criar produto com usuário admin autenticado**Services**

- **CT02** - Listar produtos com filtros aplicados

Criei classes para cada endpoint (UserService, ProductService, etc) para organizar melhor as chamadas da API e evitar repetição de código.

### Carrinhos

- **CT01** - Criar carrinho com sucesso**Custom Commands**

- **CT02** - Validar erro ao adicionar produto inexistente

Alguns comandos customizados para facilitar tarefas repetitivas como login, criação de usuário admin e geração de emails únicos.

**Total: 8 cenários críticos**

**Fixtures**

> **Nota:** Cenários adicionais foram mapeados e estão comentados nos arquivos de teste (usando `.skip`), mas foram priorizados apenas os 2 cenários críticos de cada funcionalidade conforme solicitado.

Arquivos JSON com dados de exemplo para usar nos testes.

---

**Hooks**

## 📊 O que é validado nos testes

Uso de beforeEach e afterEach para preparar e limpar os dados de teste.

- Status code das respostas HTTP

- Mensagens de erro e sucesso da API## Cobertura de Testes

- Estrutura dos dados retornados

- Regras de negócio (ex: email duplicado, autenticação)**8 cenários críticos implementados**

- Autorização de usuários admin

- login.cy.js: 2 cenários

---- usuarios.cy.js: 2 cenários

- produtos.cy.js: 2 cenários

## 🏗️ Organização do Código- carrinhos.cy.js: 2 cenários



### Services> Obs: Foram mapeados cenários adicionais (comentados com `.skip`) mas priorizei apenas os 2 críticos de cada funcionalidade conforme solicitado no desafio.

Classes criadas para organizar as chamadas da API por funcionalidade (UserService, ProductService, LoginService, CartService). Isso evita repetição de código e facilita a manutenção.

## O que é validado

### Custom Commands

Comandos personalizados no Cypress para tarefas repetitivas como login, criação de usuário admin e geração de emails únicos.- Status code das respostas

- Mensagens de erro e sucesso

### Fixtures- Estrutura dos dados retornados

Arquivos JSON com dados de exemplo que podem ser reutilizados em diferentes testes.- Regras de negócio (ex: não permitir email duplicado)

- Autenticação e autorização

### Hooks

Uso de `before`, `after`, `beforeEach` e `afterEach` para preparar o ambiente de teste e fazer limpeza dos dados criados.## Próximos passos



---- Adicionar mais cenários (deletar usuário, atualizar produto, etc)

- Integrar com CI/CD

## 📈 Próximos passos- Melhorar os relatórios



- [ ] Implementar cenários adicionais já mapeados---

- [ ] Adicionar testes de atualização e exclusão

- [ ] Integrar com CI/CD (GitHub Actions)**Filipe Malta**  

- [ ] Melhorar visualização dos relatóriosQA Pleno  

- [ ] Adicionar testes de performance[GitHub](https://github.com/FilipeMalta) | filipe.fm.malta@gmail.com


---

## 👤 Autor

**Filipe Malta**  
QA Pleno

📧 filipe.fm.malta@gmail.com  
🔗 [GitHub](https://github.com/FilipeMalta)
