// ***********************************************
// Custom commands for API testing
// ***********************************************

/**
 * Custom command to validate response schema
 * @example cy.validateSchema(response.body, schema)
 */
Cypress.Commands.add('validateSchema', (data, schema) => {
    Object.keys(schema).forEach((key) => {
        expect(data).to.have.property(key);
        if (schema[key] !== null) {
            expect(data[key]).to.be.a(schema[key]);
        }
    });
});

/**
 * Custom command to generate unique email
 * @example cy.generateEmail()
 */
Cypress.Commands.add('generateEmail', () => {
    const timestamp = Date.now();
    return `usuario_${timestamp}@qa.com.br`;
});

/**
 * Custom command to create admin user
 * @example cy.createAdminUser()
 */
Cypress.Commands.add('createAdminUser', () => {
    const email = `admin_${Date.now()}@qa.com.br`;
    const userData = {
        nome: 'Admin QA',
        email: email,
        password: 'teste@123',
        administrador: 'true'
    };

    return cy.request({
        method: 'POST',
        url: '/usuarios',
        body: userData,
        failOnStatusCode: false
    }).then((response) => {
        return { ...userData, _id: response.body._id };
    });
});

/**
 * Custom command to login and get token
 * @example cy.login(email, password)
 */
Cypress.Commands.add('login', (email, password) => {
    return cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: email,
            password: password
        },
        failOnStatusCode: false
    }).then((response) => {
        if (response.status === 200) {
            return response.body.authorization;
        }
        return null;
    });
});

/**
 * Custom command to delete user by ID
 * @example cy.deleteUser(userId)
 */
Cypress.Commands.add('deleteUser', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `/usuarios/${userId}`,
        failOnStatusCode: false
    });
});

/**
 * Custom command to delete product by ID
 * @example cy.deleteProduct(productId, token)
 */
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

/**
 * Custom command to cleanup test data
 * @example cy.cleanupTestData()
 */
Cypress.Commands.add('cleanupTestData', () => {
    cy.log('Limpeza de dados de teste realizada');
});
