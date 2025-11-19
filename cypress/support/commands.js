// Comandos customizados para facilitar os testes

// Gera um email único
Cypress.Commands.add('generateEmail', () => {
    return `usuario_${Date.now()}@qa.com.br`;
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

// Remove um usuário
Cypress.Commands.add('deleteUser', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `/usuarios/${userId}`,
        failOnStatusCode: false
    });
});

// Remove um produto
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
