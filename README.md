# Automação de Testes API - ServeRest# Automação de Testes API - ServeRest# Automação de Testes API - ServeRest



Projeto de testes automatizados para validar os principais fluxos da API ServeRest utilizando Cypress.



**API testada:** https://serverest.devProjeto de testes automatizados para validar os principais fluxos da API ServeRest utilizando Cypress.Projeto de testes automatizados de API usando Cypress para validar os principais fluxos da API ServeRest.



---



## 🚀 Tecnologias**API testada:** https://serverest.dev**API testada:** [serverest.dev](https://serverest.dev)



- **Cypress** - Framework de testes

- **JavaScript** - Linguagem de programação

- **Node.js** - Ambiente de execução---## Tecnologias

- **Faker.js** - Geração de dados dinâmicos

- **Mochawesome** - Geração de relatórios HTML



---## 🚀 Tecnologias- Cypress



## 📋 Pré-requisitos- JavaScript



- Node.js versão 14 ou superior- **Cypress** - Framework de testes- Node.js

- npm ou yarn

- Git- **JavaScript** - Linguagem de programação- Faker.js (dados dinâmicos)



---- **Node.js** - Ambiente de execução- Mochawesome (relatórios)



## 🔧 Instalação- **Faker.js** - Geração de dados dinâmicos



```bash- **Mochawesome** - Geração de relatórios HTML## Pré-requisitos

# Clonar o repositório

git clone https://github.com/FilipeMalta/desafio-api-QA.git



# Acessar a pasta do projeto---- Node.js 14 ou superior

cd desafio-api-QA

- npm ou yarn

# Instalar as dependências

npm install## 📋 Pré-requisitos- Git

```



---

- Node.js versão 14 ou superior## Instalação

## ▶️ Como executar

- npm ou yarn

### Executar todos os testes (modo headless)

```bash- Git```bash

npm test

```git clone https://github.com/FilipeMalta/desafio-api-QA.git



### Abrir interface do Cypress (modo interativo)---cd desafio-api-QA

```bash

npm run cy:opennpm install

```

## 🔧 Instalação```

### Executar testes específicos

```bash

npm run test:login      # Testes de Login

npm run test:usuarios   # Testes de Usuários```bash## Como executar

npm run test:produtos   # Testes de Produtos

npm run test:carrinhos  # Testes de Carrinhos# Clonar o repositório

```

git clone https://github.com/FilipeMalta/desafio-api-QA.git**Modo interativo:**

### Gerar relatório HTML

```bash```bash

npm run report

```# Acessar a pasta do projetonpm run cy:open



---cd desafio-api-QA```



## 📁 Estrutura do Projeto



```# Instalar as dependências**Modo headless:**

cypress/

├── e2e/                    # Arquivos de testenpm install```bash

│   ├── login.cy.js

│   ├── usuarios.cy.js```npm run test

│   ├── produtos.cy.js

│   └── carrinhos.cy.js```

├── fixtures/               # Dados estáticos para testes

│   ├── users.json---

│   ├── products.json

│   └── carts.json**Testes específicos:**

├── services/               # Classes para organizar chamadas da API

│   ├── LoginService.js## ▶️ Como executar```bash

│   ├── UserService.js

│   ├── ProductService.jsnpm run test:login

│   └── CartService.js

└── support/                # Comandos customizados e configurações### Executar todos os testes (modo headless)npm run test:usuarios

    ├── commands.js

    └── e2e.js```bashnpm run test:produtos

```

npm testnpm run test:carrinhos

---

``````

## 🧪 Cenários de Teste Implementados



### Login

- **CT01** - Login com credenciais válidas### Abrir interface do Cypress (modo interativo)**Gerar relatório:**

- **CT02** - Login com credenciais inválidas

```bash```bash

### Usuários

- **CT01** - Criar usuário com sucessonpm run cy:opennpm run report

- **CT02** - Validar erro ao cadastrar email duplicado

``````

### Produtos

- **CT01** - Criar produto com usuário admin autenticado

- **CT02** - Listar produtos com filtros aplicados

### Executar testes específicos## Estrutura do Projeto

### Carrinhos

- **CT01** - Criar carrinho com sucesso```bash

- **CT02** - Validar erro ao adicionar produto inexistente

npm run test:login      # Testes de Login```

**Total: 8 cenários críticos**

npm run test:usuarios   # Testes de Usuárioscypress/

> **Nota:** Cenários adicionais foram mapeados e estão comentados nos arquivos de teste (usando `.skip`), mas foram priorizados apenas os 2 cenários críticos de cada funcionalidade conforme solicitado.

npm run test:produtos   # Testes de Produtos├── e2e/

---

npm run test:carrinhos  # Testes de Carrinhos│   ├── login.cy.js

## 📊 O que é validado nos testes

```│   ├── usuarios.cy.js

- Status code das respostas HTTP

- Mensagens de erro e sucesso da API│   ├── produtos.cy.js

- Estrutura dos dados retornados

- Regras de negócio (ex: email duplicado, autenticação)### Gerar relatório HTML│   └── carrinhos.cy.js

- Autorização de usuários admin

```bash├── fixtures/

---

npm run report│   ├── users.json

## 🏗️ Organização do Código

```│   ├── products.json

### Services

Classes criadas para organizar as chamadas da API por funcionalidade (UserService, ProductService, LoginService, CartService). Isso evita repetição de código e facilita a manutenção.│   └── carts.json



### Custom Commands---├── services/

Comandos personalizados no Cypress para tarefas repetitivas como login, criação de usuário admin e geração de emails únicos.

│   ├── LoginService.js

### Fixtures

Arquivos JSON com dados de exemplo que podem ser reutilizados em diferentes testes.## 📁 Estrutura do Projeto│   ├── UserService.js



### Hooks│   ├── ProductService.js

Uso de `before`, `after`, `beforeEach` e `afterEach` para preparar o ambiente de teste e fazer limpeza dos dados criados.

```│   └── CartService.js

---

cypress/└── support/

## 📈 Próximos passos

├── e2e/                    # Arquivos de teste    ├── commands.js

- [ ] Implementar cenários adicionais já mapeados

- [ ] Adicionar testes de atualização e exclusão│   ├── login.cy.js    └── e2e.js

- [ ] Integrar com CI/CD (GitHub Actions)

- [ ] Melhorar visualização dos relatórios│   ├── usuarios.cy.js```

- [ ] Adicionar testes de performance

│   ├── produtos.cy.js

---

│   └── carrinhos.cy.js## Cenários de Teste

## 👤 Autor

├── fixtures/               # Dados estáticos para testes

**Filipe Malta**  

QA Pleno│   ├── users.json### Login (2 cenários críticos)



📧 filipe.fm.malta@gmail.com  │   ├── products.json**CT01** - Login com credenciais válidas  

🔗 [GitHub](https://github.com/FilipeMalta)

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
