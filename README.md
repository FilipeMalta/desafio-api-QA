# Automação de Testes API - ServeRest# Desafio API - Testes Automatizados com Cypress# Desafio API - Testes Automatizados com Cypress# Desafio API - Testes## Stack de Tecnologias



Projeto de testes automatizados de API REST usando Cypress para validar os principais endpoints da plataforma ServeRest.



**API testada:** [serverest.dev](https://serverest.dev)[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)



## Tecnologias[![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)



- Cypress 13.x[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)Tecnologias utilizadas no projeto:

- JavaScript (ES6+)

- Node.js 14+## Sobre o projeto

- Service Objects Pattern

- Faker.js (geração de dados dinâmicos)[![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

- Mochawesome (relatórios HTML)

Este é um projeto de automação de testes de API desenvolvido com Cypress. O objetivo é validar os principais endpoints da [ServeRest](https://serverest.dev), uma API REST ideal para estudos e prática de automação de testes.

## Pré-requisitos

- **[Cypress](https://www.cypress.io/)** - Framework principal para automação de testes de API

- Node.js 14 ou superior

- npm ou yarnO projeto está aberto para análise e contribuições. Se você trabalha com QA ou está começando em automação de testes, sinta-se à vontade para explorar o código e compartilhar sugestões.

- Git

## Sobre o projeto- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript

## Instalação

### O que é testado aqui?

```bash

git clone https://github.com/FilipeMalta/desafio-api-QA.git- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** - Geração de relatórios HTML detalhados

cd desafio-api-QA

npm installO projeto cobre os principais fluxos da API ServeRest:

```

- **Login** - Autenticação e geração de tokensEste é um projeto de automação de testes de API desenvolvido com Cypress. O objetivo é validar os principais endpoints da [ServeRest](https://serverest.dev), uma API REST ideal para estudos e prática de automação de testes.- **[@faker-js/faker](https://fakerjs.dev/)** - Biblioteca para geração de dados dinâmicos nos testesizados com Cypress

## Como executar

- **Usuários** - Operações de cadastro, consulta, atualização e remoção

**Modo interativo:**

```bash- **Produtos** - Gerenciamento completo do catálogo

npm run cy:open

```- **Carrinhos** - Criação e validação de regras de negócio



**Modo headless:**O projeto está aberto para análise e contribuições. Se você trabalha com QA ou está começando em automação de testes, sinta-se à vontade para explorar o código e compartilhar sugestões.[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

```bash

npm run test**API Base:** https://serverest.dev  

```

**Documentação:** https://serverest.dev[![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

**Testes específicos:**

```bash

npm run test:login

npm run test:usuarios## Stack de Tecnologias### O que é testado aqui?

npm run test:produtos

npm run test:carrinhos

```

Tecnologias utilizadas no projeto:## Sobre o projeto

**Gerar relatório:**

```bash

npm run report

```- **[Cypress](https://www.cypress.io/)** - Framework principal para automação de testes de APIO projeto cobre os principais fluxos da API ServeRest:



## Estrutura do Projeto- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript



```- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** - Geração de relatórios HTML detalhados- **Login** - Autenticação e geração de tokensEste é um projeto de automação de testes de API desenvolvido com Cypress. O objetivo é validar os principais endpoints da [ServeRest](https://serverest.dev), uma API REST ideal para estudos e prática de automação de testes.

cypress/

├── e2e/- **[@faker-js/faker](https://fakerjs.dev/)** - Biblioteca para geração de dados dinâmicos nos testes

│   ├── login.cy.js

│   ├── usuarios.cy.js- **Usuários** - Operações de cadastro, consulta, atualização e remoção

│   ├── produtos.cy.js

│   └── carrinhos.cy.js## Estrutura do Projeto

├── fixtures/

│   ├── users.json- **Produtos** - Gerenciamento completo do catálogoO projeto está aberto para análise e contribuições. Se você trabalha com QA ou está começando em automação de testes, sinta-se à vontade para explorar o código e compartilhar sugestões.

│   ├── products.json

│   └── carts.jsonO projeto está organizado seguindo boas práticas de arquitetura de testes:

├── services/

│   ├── LoginService.js- **Carrinhos** - Criação e validação de regras de negócio

│   ├── UserService.js

│   ├── ProductService.js```

│   └── CartService.js

└── support/desafio-api-QA/### O que é testado aqui?

    ├── commands.js

    └── e2e.js│

```

├── cypress/**API Base:** https://serverest.dev  

## Cenários de Teste

│   ├── e2e/                    # Arquivos de teste

### Login (2 testes implementados)

- Login com credenciais válidas│   │   ├── login.cy.js         # Testes de autenticação**Documentação:** https://serverest.devO projeto cobre os principais fluxos da API ServeRest:

- Login com credenciais inválidas

│   │   ├── usuarios.cy.js      # Testes de CRUD de usuários

**Cenários mapeados:** 13 adicionais (validação de token, rate limiting, XSS, SQL injection, etc.)

│   │   ├── produtos.cy.js      # Testes de produtos- **Login** - Autenticação e geração de tokens

---

│   │   └── carrinhos.cy.js     # Testes de carrinho

### Usuários (2 testes implementados)

- Criar usuário com sucesso│   │## Stack de Tecnologias- **Usuários** - Operações de cadastro, consulta, atualização e remoção

- Tentar cadastrar email duplicado

│   ├── fixtures/               # Massa de dados para os testes

**Cenários mapeados:** 26 adicionais (CRUD completo, filtros, validações de campos, performance, etc.)

│   │   ├── users.json- **Produtos** - Gerenciamento completo do catálogo

---

│   │   ├── products.json

### Produtos (2 testes implementados)

- Criar produto com usuário admin│   │   └── carts.jsonTecnologias utilizadas no projeto:- **Carrinhos** - Criação e validação de regras de negócio

- Listar produtos com filtros

│   │

**Cenários mapeados:** 28 adicionais (CRUD completo, validações de permissão, estoque, preços, etc.)

│   ├── services/               # Service Objects para abstração das APIs

---

│   │   ├── LoginService.js

### Carrinhos (2 testes implementados)

- Criar carrinho com sucesso│   │   ├── UserService.js- **[Cypress](https://www.cypress.io/)** - Framework principal para automação de testes de API**API Base:** https://serverest.dev

- Tentar adicionar produto inexistente

│   │   ├── ProductService.js

**Cenários mapeados:** 26 adicionais (validações de estoque, múltiplos produtos, cancelamento, conclusão, etc.)

│   │   └── CartService.js- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript**Documentação:** https://serverest.dev

---

│   │

## Padrões Utilizados

│   └── support/                # Comandos customizados e configurações- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** - Geração de relatórios HTML detalhados

**Service Objects Pattern**

│       ├── commands.js

Cada endpoint possui sua classe service com métodos encapsulados. Facilita manutenção - se a API mudar, basta alterar em um único lugar.

│       └── e2e.js- **[@faker-js/faker](https://fakerjs.dev/)** - Biblioteca para geração de dados dinâmicos nos testes## �️ Stack de Tecnologias

**Custom Commands**

│

Comandos personalizados para validações recorrentes, geração de dados dinâmicos e operações comuns entre os testes.

├── cypress.config.js           # Configurações do Cypress

**Fixtures**

├── package.json               # Dependências do projeto

Massa de dados separada dos testes, permitindo fácil manutenção e reutilização em diferentes cenários.

└── README.md                 # Documentação## Estrutura do ProjetoAqui tá o que eu usei pra montar essa automação:

**Organização**

```

Separação clara entre cenários críticos e adicionais. Uso de hooks para setup/cleanup. Nomenclatura descritiva.



## Status dos Testes

## Pré-requisitos

**8/8 testes implementados passando (100%)**

O projeto está organizado seguindo boas práticas de arquitetura de testes:- **[Cypress](https://www.cypress.io/)** - O cara que manda nos testes! Simples de usar e super poderoso

- login.cy.js: 2/2

- usuarios.cy.js: 2/2Antes de começar, você precisa ter instalado:

- produtos.cy.js: 2/2

- carrinhos.cy.js: 2/2- **[Node.js](https://nodejs.org/)** - A base de tudo, rodando nos bastidores



**93 cenários mapeados** para futuras implementações- **Node.js** (versão 14 ou superior) - [Download](https://nodejs.org/)



## Validações- **npm** ou **yarn** (geralmente já vem com o Node)```- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** - Gera aqueles relatórios HTML bonitos e fáceis de apresentar



- Status code das requisições- **Git**

- Estrutura do response body

- Headers HTTPdesafio-api-QA/- **[@faker-js/faker](https://fakerjs.dev/)** - Pra criar dados aleatórios nos testes (nomes, emails, etc.)

- Tipos de dados (schema validation)

- Regras de negócio da API## Instalação

- Tempo de resposta (performance)

- Autorização e autenticação│

- Tratamento de erros

### Passo 1: Clone o repositório

## Melhorias Futuras

├── cypress/## � Como tá organizado?

- Implementação dos 93 cenários mapeados

- Integração com CI/CD (GitHub Actions)```bash

- Testes de carga e performance

- Validação de contratos com JSON Schemagit clone https://github.com/FilipeMalta/desafio-api-QA.git│   ├── e2e/                    # Arquivos de teste

- Cobertura de testes de segurança (OWASP)

- Dockerização do ambientecd desafio-api-QA



---```│   │   ├── login.cy.js         # Testes de autenticaçãoOrganizei o projeto de um jeito que fica fácil de entender e dar manutenção depois:



**Filipe Malta**  

QA Pleno  

[GitHub](https://github.com/FilipeMalta) | filipe.fm.malta@gmail.com### Passo 2: Instale as dependências│   │   ├── usuarios.cy.js      # Testes de CRUD de usuários




```bash│   │   ├── produtos.cy.js      # Testes de produtos```

npm install

```│   │   └── carrinhos.cy.js     # Testes de carrinhodesafio-api-QA/



## Execução dos Testes│   ││



### Modo Headless (linha de comando)│   ├── fixtures/               # Massa de dados para os testes├── cypress/

Ideal para execução em CI/CD ou quando você deseja apenas os resultados:

```bash│   │   ├── users.json│   ├── e2e/                    # É aqui que moram os testes! 🧪

npm run test

```│   │   ├── products.json│   │   ├── login.cy.js         # Testes de autenticação



### Modo Interativo (Cypress Test Runner)│   │   └── carts.json│   │   ├── usuarios.cy.js      # Testes de CRUD de usuários

Recomendado para debugging e acompanhamento visual dos testes:

```bash│   ││   │   ├── produtos.cy.js      # Testes de produtos

npm run cy:open

```│   ├── services/               # Service Objects para abstração das APIs│   │   └── carrinhos.cy.js     # Testes de carrinho de compras



### Executar testes específicos│   │   ├── LoginService.js│   │



```bash│   │   ├── UserService.js│   ├── fixtures/               # Massa de dados pros testes

# Apenas testes de Login

npm run test:login│   │   ├── ProductService.js│   │   ├── users.json



# Apenas testes de Usuários│   │   └── CartService.js│   │   ├── products.json

npm run test:usuarios

│   ││   │   └── carts.json

# Apenas testes de Produtos

npm run test:produtos│   └── support/                # Comandos customizados e configurações│   │



# Apenas testes de Carrinhos│       ├── commands.js│   ├── services/               # Service Objects (deixa o código mais limpo)

npm run test:carrinhos

```│       └── e2e.js│   │   ├── LoginService.js



### Gerar relatório HTML││   │   ├── UserService.js

```bash

npm run report├── cypress.config.js           # Configurações do Cypress│   │   ├── ProductService.js

```

├── package.json               # Dependências do projeto│   │   └── CartService.js

## Cenários de Testes

└── README.md                 # Documentação│   │

Separei os cenários já implementados daqueles que foram mapeados para futuras implementações.

```│   └── support/                # Comandos customizados e configs globais

### LOGIN

│       ├── commands.js

#### Cenários implementados:

1. **CT01** - Login com sucesso usando credenciais válidas## Pré-requisitos│       └── e2e.js

2. **CT02** - Tentativa de login com credenciais inválidas

│

#### Cenários mapeados para implementação:

3. Login com email não cadastradoAntes de começar, você precisa ter instalado:├── cypress.config.js           # Configurações do Cypress

4. Login com senha incorreta

5. Login sem informar email├── package.json               # Dependências do projeto

6. Login sem informar senha

7. Login com email em formato inválido- **Node.js** (versão 14 ou superior) - [Download](https://nodejs.org/)└── README.md                 # Esse arquivo que você tá lendo agora 😄

8. Validação do token gerado no login

9. Login com campos vazios- **npm** ou **yarn** (geralmente já vem com o Node)```

10. Login com SQL Injection

11. Login com XSS- **Git**

12. Validação de rate limiting (múltiplas tentativas)

13. Validação de expiração do token## 🔧 O que você precisa ter instalado?

14. Login com caracteres especiais na senha

15. Login case sensitive no email## Instalação



---Antes de botar a mão na massa, garante que você tem essas coisas instaladas:



### USUÁRIOS### Passo 1: Clone o repositório



#### Cenários implementados:- **Node.js** (versão 14 pra cima) - [baixa aqui](https://nodejs.org/)

1. **CT01** - Criar um novo usuário com sucesso

2. **CT02** - Tentar cadastrar usuário com email duplicado```bash- **npm** ou **yarn** (geralmente já vem com o Node)



#### Cenários mapeados para implementação:git clone https://github.com/FilipeMalta/desafio-api-QA.git- **Git** - pra clonar o projeto

3. Listar todos os usuários cadastrados

4. Buscar usuário por ID existentecd desafio-api-QA

5. Buscar usuário por ID inexistente

6. Criar usuário sem informar nome```## � Bora rodar isso?

7. Criar usuário sem informar email

8. Criar usuário com email em formato inválido

9. Criar usuário sem informar senha

10. Criar usuário sem informar campo administrador### Passo 2: Instale as dependências### Passo 1: Clone o repositório

11. Criar usuário administrador

12. Criar usuário comum (não administrador)

13. Atualizar dados de um usuário existente

14. Atualizar usuário com email já utilizado por outro```bash```bash

15. Atualizar usuário inexistente

16. Deletar usuário existentenpm installgit clone https://github.com/FilipeMalta/desafio-api-QA.git

17. Deletar usuário inexistente

18. Deletar usuário que possui carrinho ativo```cd desafio-api-QA

19. Filtrar usuários por nome

20. Filtrar usuários por email```

21. Filtrar usuários administradores

22. Validar paginação de usuários## Execução dos Testes

23. Criar usuário com nome muito longo

24. Criar usuário com senha fraca### Passo 2: Instale as dependências

25. Validar campos obrigatórios

26. Validar tipos de dados dos campos### Modo Headless (linha de comando)

27. Criar múltiplos usuários em sequência

28. Validar performance de listagem com muitos usuáriosIdeal para execução em CI/CD ou quando você deseja apenas os resultados:```bash



---```bashnpm install



### PRODUTOSnpm run test```



#### Cenários implementados:```

1. **CT01** - Criar produto com usuário admin autenticado

2. **CT02** - Listar produtos com filtros aplicadosVai demorar um pouquinho na primeira vez, mas é só aguardar o npm fazer a mágica dele ✨



#### Cenários mapeados para implementação:### Modo Interativo (Cypress Test Runner)

3. Criar produto sem autenticação

4. Criar produto com usuário não administradorRecomendado para debugging e acompanhamento visual dos testes:## ▶️ Rodando os Testes

5. Criar produto com token inválido

6. Criar produto com token expirado```bash

7. Listar todos os produtos

8. Buscar produto por ID existentenpm run cy:open### Modo tradicional (sem interface gráfica)

9. Buscar produto por ID inexistente

10. Criar produto sem informar nome```Perfeito pra rodar no CI/CD ou quando você só quer ver os resultados:

11. Criar produto sem informar preço

12. Criar produto sem informar descrição```bash

13. Criar produto sem informar quantidade

14. Criar produto com preço negativo### Executar testes específicosnpm run test

15. Criar produto com preço zero

16. Criar produto com quantidade negativa```

17. Criar produto com nome duplicado

18. Atualizar produto existente```bash

19. Atualizar produto inexistente

20. Atualizar produto sem autenticação# Apenas testes de Login### Modo interativo (com a interface do Cypress)

21. Deletar produto existente

22. Deletar produto inexistentenpm run test:loginIdeal pra debugar e ver os testes rodando em tempo real:

23. Deletar produto que está em carrinho ativo

24. Filtrar produtos por nome```bash

25. Filtrar produtos por preço

26. Filtrar produtos por quantidade# Apenas testes de Usuáriosnpm run cy:open

27. Validar paginação de produtos

28. Criar produto com descrição muito longanpm run test:usuarios```

29. Validar campos obrigatórios

30. Validar tipos de dados dos campos



---# Apenas testes de Produtos### Quer rodar só um tipo de teste?



### CARRINHOSnpm run test:produtosÀs vezes você não precisa rodar tudo, né? Então vai de:



#### Cenários implementados:

1. **CT01** - Criar um carrinho com sucesso

2. **CT02** - Tentar adicionar produto inexistente no carrinho# Apenas testes de Carrinhos```bash



#### Cenários mapeados para implementação:npm run test:carrinhos# Só os testes de Login

3. Criar carrinho sem autenticação

4. Criar carrinho com token inválido```npm run test:login

5. Criar carrinho com token expirado

6. Listar todos os carrinhos

7. Buscar carrinho por ID existente

8. Buscar carrinho por ID inexistente### Gerar relatório HTML# Só os testes de Usuários

9. Criar carrinho vazio (sem produtos)

10. Criar carrinho com múltiplos produtos```bashnpm run test:usuarios

11. Criar carrinho com produto duplicado

12. Criar carrinho com quantidade maior que o estoquenpm run report

13. Criar carrinho com quantidade zero

14. Criar carrinho com quantidade negativa```# Só os testes de Produtos

15. Criar segundo carrinho com usuário que já possui carrinho ativo

16. Cancelar compra (deletar carrinho)npm run test:produtos

17. Concluir compra (deletar carrinho)

18. Validar que produtos voltam ao estoque ao cancelar compra## Cenários de Testes

19. Validar que produtos não voltam ao estoque ao concluir compra

20. Validar que concluir compra libera o usuário para novo carrinho# Só os testes de Carrinhos

21. Criar carrinho com produto sem estoque

22. Validar cálculo do valor total do carrinhoSeparei os cenários já implementados daqueles que foram mapeados para futuras implementações.npm run test:carrinhos

23. Validar atualização de estoque ao criar carrinho

24. Validar campos obrigatórios```

25. Validar estrutura do array de produtos

26. Filtrar carrinhos por ID de produto### LOGIN

27. Validar paginação de carrinhos

28. Performance com carrinho com muitos produtos### Gerar aquele relatório bonitão



---#### Cenários implementados:```bash



## Relatórios1. **CT01** - Login com sucesso usando credenciais válidasnpm run report



Após a execução dos testes, os relatórios são gerados automaticamente:2. **CT02** - Tentativa de login com credenciais inválidas```



- **Relatório HTML**: `cypress/reports/mochawesome/index.html`Vai abrir um HTML com todos os detalhes dos testes. Ótimo pra apresentar pros stakeholders! 📊

- **Screenshots**: `cypress/screenshots/` (capturados automaticamente em caso de falhas)

- **Vídeos**: `cypress/videos/` (gravação da execução dos testes)#### Cenários mapeados para implementação:



Para visualizar o relatório HTML no navegador:3. Login com email não cadastrado## 🎭 Cenários de Testes

```bash

npm run report4. Login com senha incorreta

```

5. Login sem informar emailAqui eu separei os cenários que já automatizei e aqueles que ficaram mapeados pra uma próxima sprint (ou pra você implementar, se quiser contribuir! 😉).

## Boas Práticas Aplicadas

6. Login sem informar senha

### Service Objects Pattern

Uso do padrão Service Objects para encapsular as chamadas da API em classes específicas. Isso facilita a manutenção e evita duplicação de código - quando um endpoint muda, basta alterar em um único lugar.7. Login com email em formato inválido### 🔐 LOGIN



### Custom Commands8. Validação do token gerado no login

Comandos customizados foram criados para operações recorrentes, como validações de schema e geração de dados dinâmicos, reduzindo a repetição de código nos testes.

9. Login com campos vazios#### ✅ Cenários que já tão rodando:

### Fixtures

A massa de dados está separada dos arquivos de teste, facilitando a manutenção e permitindo a reutilização dos mesmos dados em diferentes cenários.10. Login com SQL Injection1. **CT01** - Login com sucesso usando credenciais válidas



### Organização dos Testes11. Login com XSS2. **CT02** - Tentativa de login com credenciais inválidas (deve bloquear)

Os testes são organizados separando cenários críticos (que não podem falhar) dos cenários adicionais, com nomenclatura clara e uso de hooks (before, after, beforeEach, afterEach) para setup e cleanup.

12. Validação de rate limiting (múltiplas tentativas)

### Validações Completas

As validações não se limitam ao status code. São verificados:13. Validação de expiração do token#### 💡 Ideias de cenários que ainda podem ser implementados:

- Status code da resposta

- Corpo da resposta (estrutura e valores)14. Login com caracteres especiais na senha3. Login com email não cadastrado

- Headers

- Tipos de dados15. Login case sensitive no email4. Login com senha incorreta

- Tempo de resposta (performance)

- Regras de negócio5. Login sem informar email



## Contribuindo---6. Login sem informar senha



Contribuições são bem-vindas! Se você encontrou algum bug, tem ideias de melhorias, ou deseja implementar algum dos cenários pendentes, sinta-se à vontade para abrir uma issue ou enviar um pull request.7. Login com email em formato inválido



## Autor### USUÁRIOS8. Validação do token gerado no login



**Filipe Malta** - QA Pleno9. Login com campos vazios



## Licença#### Cenários implementados:10. Login com SQL Injection



Este projeto está sob a licença MIT.1. **CT01** - Criar um novo usuário com sucesso11. Login com XSS



---2. **CT02** - Tentar cadastrar usuário com email duplicado12. Validação de rate limiting (múltiplas tentativas)



**Desenvolvido com Cypress**13. Validação de expiração do token


#### Cenários mapeados para implementação:14. Login com caracteres especiais na senha

3. Listar todos os usuários cadastrados15. Login case sensitive no email

4. Buscar usuário por ID existente

5. Buscar usuário por ID inexistente---

6. Criar usuário sem informar nome

7. Criar usuário sem informar email### 👥 USUÁRIOS

8. Criar usuário com email em formato inválido

9. Criar usuário sem informar senha#### ✅ Cenários que já tão rodando:

10. Criar usuário sem informar campo administrador1. **CT01** - Criar um novo usuário com sucesso (aquele fluxo feliz)

11. Criar usuário administrador2. **CT02** - Tentar cadastrar usuário com email duplicado (e ver ele ser bloqueado, como deve ser)

12. Criar usuário comum (não administrador)

13. Atualizar dados de um usuário existente#### 💡 Ideias de cenários que ainda podem ser implementados:

14. Atualizar usuário com email já utilizado por outro3. Listar todos os usuários cadastrados

15. Atualizar usuário inexistente4. Buscar usuário por ID existente

16. Deletar usuário existente5. Buscar usuário por ID inexistente

17. Deletar usuário inexistente6. Criar usuário sem informar nome

18. Deletar usuário que possui carrinho ativo7. Criar usuário sem informar email

19. Filtrar usuários por nome8. Criar usuário com email em formato inválido

20. Filtrar usuários por email9. Criar usuário sem informar senha

21. Filtrar usuários administradores10. Criar usuário sem informar campo administrador

22. Validar paginação de usuários11. Criar usuário administrador

23. Criar usuário com nome muito longo12. Criar usuário comum (não administrador)

24. Criar usuário com senha fraca13. Atualizar dados de um usuário existente

25. Validar campos obrigatórios14. Atualizar usuário com email já utilizado por outro

26. Validar tipos de dados dos campos15. Atualizar usuário inexistente

27. Criar múltiplos usuários em sequência16. Deletar usuário existente

28. Validar performance de listagem com muitos usuários17. Deletar usuário inexistente

18. Deletar usuário que possui carrinho ativo

---19. Filtrar usuários por nome

20. Filtrar usuários por email

### PRODUTOS21. Filtrar usuários administradores

22. Validar paginação de usuários

#### Cenários implementados:23. Criar usuário com nome muito longo

1. **CT01** - Criar produto com usuário admin autenticado24. Criar usuário com senha fraca

2. **CT02** - Listar produtos com filtros aplicados25. Validar campos obrigatórios

26. Validar tipos de dados dos campos

#### Cenários mapeados para implementação:27. Criar múltiplos usuários em sequência

3. Criar produto sem autenticação28. Validar performance de listagem com muitos usuários

4. Criar produto com usuário não administrador

5. Criar produto com token inválido---

6. Criar produto com token expirado

7. Listar todos os produtos### 📦 PRODUTOS

8. Buscar produto por ID existente

9. Buscar produto por ID inexistente#### ✅ Cenários que já tão rodando:

10. Criar produto sem informar nome1. **CT01** - Criar produto com usuário admin autenticado (porque sem permissão não rola, né?)

11. Criar produto sem informar preço2. **CT02** - Listar produtos com filtros (importante pra busca!)

12. Criar produto sem informar descrição

13. Criar produto sem informar quantidade#### 💡 Ideias de cenários que ainda podem ser implementados:

14. Criar produto com preço negativo3. Criar produto sem autenticação

15. Criar produto com preço zero4. Criar produto com usuário não administrador

16. Criar produto com quantidade negativa5. Criar produto com token inválido

17. Criar produto com nome duplicado6. Criar produto com token expirado

18. Atualizar produto existente7. Listar todos os produtos

19. Atualizar produto inexistente8. Buscar produto por ID existente

20. Atualizar produto sem autenticação9. Buscar produto por ID inexistente

21. Deletar produto existente10. Criar produto sem informar nome

22. Deletar produto inexistente11. Criar produto sem informar preço

23. Deletar produto que está em carrinho ativo12. Criar produto sem informar descrição

24. Filtrar produtos por nome13. Criar produto sem informar quantidade

25. Filtrar produtos por preço14. Criar produto com preço negativo

26. Filtrar produtos por quantidade15. Criar produto com preço zero

27. Validar paginação de produtos16. Criar produto com quantidade negativa

28. Criar produto com descrição muito longa17. Criar produto com nome duplicado

29. Validar campos obrigatórios18. Atualizar produto existente

30. Validar tipos de dados dos campos19. Atualizar produto inexistente

20. Atualizar produto sem autenticação

---21. Deletar produto existente

22. Deletar produto inexistente

### CARRINHOS23. Deletar produto que está em carrinho ativo

24. Filtrar produtos por nome

#### Cenários implementados:25. Filtrar produtos por preço

1. **CT01** - Criar um carrinho com sucesso26. Filtrar produtos por quantidade

2. **CT02** - Tentar adicionar produto inexistente no carrinho27. Validar paginação de produtos

28. Criar produto com descrição muito longa

#### Cenários mapeados para implementação:29. Validar campos obrigatórios

3. Criar carrinho sem autenticação30. Validar tipos de dados dos campos

4. Criar carrinho com token inválido

5. Criar carrinho com token expirado---

6. Listar todos os carrinhos

7. Buscar carrinho por ID existente### 🛒 CARRINHOS

8. Buscar carrinho por ID inexistente

9. Criar carrinho vazio (sem produtos)#### ✅ Cenários que já tão rodando:

10. Criar carrinho com múltiplos produtos1. **CT01** - Criar um carrinho novo (simulando aquele usuário animado pra comprar)

11. Criar carrinho com produto duplicado2. **CT02** - Tentar adicionar produto inexistente no carrinho (spoiler: não pode!)

12. Criar carrinho com quantidade maior que o estoque

13. Criar carrinho com quantidade zero#### 💡 Ideias de cenários que ainda podem ser implementados:

14. Criar carrinho com quantidade negativa3. Criar carrinho sem autenticação

15. Criar segundo carrinho com usuário que já possui carrinho ativo4. Criar carrinho com token inválido

16. Cancelar compra (deletar carrinho)5. Criar carrinho com token expirado

17. Concluir compra (deletar carrinho)6. Listar todos os carrinhos

18. Validar que produtos voltam ao estoque ao cancelar compra7. Buscar carrinho por ID existente

19. Validar que produtos não voltam ao estoque ao concluir compra8. Buscar carrinho por ID inexistente

20. Validar que concluir compra libera o usuário para novo carrinho9. Criar carrinho vazio (sem produtos)

21. Criar carrinho com produto sem estoque10. Criar carrinho com múltiplos produtos

22. Validar cálculo do valor total do carrinho11. Criar carrinho com produto duplicado

23. Validar atualização de estoque ao criar carrinho12. Criar carrinho com quantidade maior que o estoque

24. Validar campos obrigatórios13. Criar carrinho com quantidade zero

25. Validar estrutura do array de produtos14. Criar carrinho com quantidade negativa

26. Filtrar carrinhos por ID de produto15. Criar segundo carrinho com usuário que já possui carrinho ativo

27. Validar paginação de carrinhos16. Cancelar compra (deletar carrinho)

28. Performance com carrinho com muitos produtos17. Concluir compra (deletar carrinho)

18. Validar que produtos voltam ao estoque ao cancelar compra

---19. Validar que produtos não voltam ao estoque ao concluir compra

20. Validar que concluir compra libera o usuário para novo carrinho

## Relatórios21. Criar carrinho com produto sem estoque

22. Validar cálculo do valor total do carrinho

Após a execução dos testes, os relatórios são gerados automaticamente:23. Validar atualização de estoque ao criar carrinho

24. Validar campos obrigatórios

- **Relatório HTML**: `cypress/reports/mochawesome/index.html`25. Validar estrutura do array de produtos

- **Screenshots**: `cypress/screenshots/` (capturados automaticamente em caso de falhas)26. Filtrar carrinhos por ID de produto

- **Vídeos**: `cypress/videos/` (gravação da execução dos testes)27. Validar paginação de carrinhos

28. Performance com carrinho com muitos produtos

Para visualizar o relatório HTML no navegador:

```bash---

npm run report

```## 📈 Relatórios



## Boas Práticas AplicadasDepois de rodar os testes, você vai encontrar os relatórios aqui:



### Service Objects Pattern- **Relatório HTML**: `cypress/reports/mochawesome/index.html` (aquele caprichado pra mostrar pro time)

Uso do padrão Service Objects para encapsular as chamadas da API em classes específicas. Isso facilita a manutenção e evita duplicação de código - quando um endpoint muda, basta alterar em um único lugar.- **Screenshots**: `cypress/screenshots/` (prints automáticos quando algo dá errado)

- **Vídeos**: `cypress/videos/` (gravação dos testes rodando - útil demais pra debugar!)

### Custom Commands

Comandos customizados foram criados para operações recorrentes, como validações de schema e geração de dados dinâmicos, reduzindo a repetição de código nos testes.Pra abrir o relatório HTML direto no navegador:

```bash

### Fixturesnpm run report

A massa de dados está separada dos arquivos de teste, facilitando a manutenção e permitindo a reutilização dos mesmos dados em diferentes cenários.```



### Organização dos Testes## 🎯 Boas Práticas que eu apliquei aqui

Os testes são organizados separando cenários críticos (que não podem falhar) dos cenários adicionais, com nomenclatura clara e uso de hooks (before, after, beforeEach, afterEach) para setup e cleanup.

### Service Objects Pattern

### Validações CompletasSabe aquela parada de deixar o código organizado e fácil de manter? Então, usei Service Objects pra isso. Basicamente, criei classes que encapsulam as chamadas da API. Assim, se o endpoint mudar, é só alterar em um lugar.

As validações não se limitam ao status code. São verificados:

- Status code da resposta### Custom Commands

- Corpo da resposta (estrutura e valores)Criei comandos customizados pra não ficar repetindo código. Por exemplo, validações de schema e geração de dados dinâmicos - se usa muito, vira comando!

- Headers

- Tipos de dados### Fixtures

- Tempo de resposta (performance)A massa de dados tá separada dos testes. Isso deixa tudo mais limpo e facilita quando você precisa mudar algum dado de teste.

- Regras de negócio

### Organização dos Testes

## ContribuindoSeparo os cenários críticos (aqueles que não podem falhar nunca) dos adicionais. Uso nomenclatura clara - quando você lê o teste, já entende o que ele faz.



Contribuições são bem-vindas! Se você encontrou algum bug, tem ideias de melhorias, ou deseja implementar algum dos cenários pendentes, sinta-se à vontade para abrir uma issue ou enviar um pull request.### Validações que importam

Não é só verificar o status code não, viu? Valido:

## Autor- Status code (claro!)

- Corpo da resposta

**Filipe Malta** - QA Pleno- Headers

- Tipos de dados

## Licença- Tempo de resposta (performance também é importante!)

- Regras de negócio (a parte mais importante, na moral)

Este projeto está sob a licença MIT.

## � Quer contribuir?

---

Fique à vontade! Se você:

**Desenvolvido com Cypress**- Achou algum bug

- Tem ideias de melhorias
- Quer implementar algum dos cenários que ficaram pendentes
- Ou só quer trocar uma ideia sobre automação de testes

Abre uma issue ou manda um pull request. Vou adorar receber contribuições! 🤝

## �👨‍💻 Sobre mim

Opa! Eu sou o **Filipe Malta**, QA Pleno apaixonado por automação de testes e qualidade de software.

Se quiser trocar uma ideia sobre QA, automação ou tomar um café virtual, me chama!

---

## � Licença

Projeto sob licença MIT - basicamente, usa aí como quiser! 😄

---

## 🙏 Agradecimentos

Valeu por ter chegado até aqui! Se esse projeto te ajudou de alguma forma, fico feliz demais.

Qualquer dúvida, só chamar! 👊

---

**Feito com ☕ + 🎵 + Cypress**
