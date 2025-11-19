# Automação de Testes de API – ServeRest

Testes automatizados da API ServeRest utilizando Cypress.

API testada: https://serverest.dev

## Tecnologias

- Cypress 15.6.0
- JavaScript
- Node.js
- Faker.js
- Mochawesome

## Instalação

```bash
git clone https://github.com/FilipeMalta/desafio-api-QA.git
cd desafio-api-QA
npm install
```

## Executar Testes

```bash
npm test                    # Todos os testes
npm run cy:open             # Interface interativa
npm run test:login          # Testes de login
npm run test:usuarios       # Testes de usuários
npm run test:produtos       # Testes de produtos
npm run test:carrinhos      # Testes de carrinhos
npm run report              # Gerar relatório HTML
```

## Estrutura

```
cypress/
├── e2e/              # Testes
├── fixtures/         # Dados estáticos
├── services/         # Chamadas da API
└── support/          # Comandos customizados
```

## Cenários Implementados

**Login**
- CT01: Login com credenciais válidas
- CT02: Login com credenciais inválidas

**Usuários**
- CT01: Criar usuário com sucesso
- CT02: Validar erro ao cadastrar email duplicado

**Produtos**
- CT01: Criar produto com usuário admin
- CT02: Listar produtos com filtros

**Carrinhos**
- CT01: Criar carrinho com sucesso
- CT02: Validar erro ao adicionar produto inexistente

Total: 8 cenários críticos

## Validações

- Status code
- Mensagens de erro/sucesso
- Estrutura de dados
- Regras de negócio

## Autor

Filipe Malta - QA Pleno  
Email: filipe.fm.malta@gmail.com  
GitHub: https://github.com/FilipeMalta
