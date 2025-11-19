// ***********************************************
// Comandos customizados para facilitar os testes
// ***********************************************

// Valida se o retorno da API tem os campos esperados
Cypress.Commands.add('validateSchema', (data, schema) => {
    Object.keys(schema).forEach((campo) => {
        expect(data).to.have.property(campo);
        if (schema[campo] !== null) {
            expect(data[campo]).to.be.a(schema[campo]);
        }
    });
});

// Gera um email único usando timestamp (evita duplicação)
Cypress.Commands.add('generateEmail', () => {
    const timestamp = Date.now();
    return `usuario_${timestamp}@qa.com.br`;
});

// Cria um usuário administrador para usar nos testes
Cypress.Commands.add('createAdminUser', () => {
    const email = `admin_${Date.now()}@qa.com.br`;
    const dadosAdmin = {
        nome: 'Admin QA',
        email: email,
        password: 'teste@123',
        administrador: 'true'
    };

    return cy.request({
        method: 'POST',
        url: '/usuarios',
        body: dadosAdmin,
        failOnStatusCode: false
    }).then((response) => {
        return { ...dadosAdmin, _id: response.body._id };
    });
});

// Faz login e retorna o token de autenticação
Cypress.Commands.add('login', (email, senha) => {
    return cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: email,
            password: senha
        },
        failOnStatusCode: false
    }).then((response) => {
        if (response.status === 200) {
            return response.body.authorization;
        }
        return null;
    });
});

// Remove um usuário (útil para limpar dados após o teste)
Cypress.Commands.add('deleteUser', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `/usuarios/${userId}`,
        failOnStatusCode: false
    });
});

// Remove um produto (precisa do token de admin)
Cypress.Commands.add('deleteProduct', (productId, token) => {
    return cy.request({
        method: 'DELETE',
        url: `/produtos/${productId}`,
        headers: {
            Authorization: token
        },
        failOnStatusCode: false
    });
});

// Comando para limpar dados de teste (placeholder para futuro)
Cypress.Commands.add('cleanupTestData', () => {
    cy.log('Limpeza de dados de teste realizada');
});
