// Centraliza as chamadas da API de Usuários
class UserService {

    // Lista usuários
    static getUsers(filtros = {}) {
        return cy.request({
            method: 'GET',
            url: '/usuarios',
            qs: filtros,
            failOnStatusCode: false
        });
    }

    // Busca usuário por ID
    static getUserById(userId) {
        return cy.request({
            method: 'GET',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }

    // Cria usuário
    static createUser(dadosUsuario) {
        return cy.request({
            method: 'POST',
            url: '/usuarios',
            body: dadosUsuario,
            failOnStatusCode: false
        });
    }

    // Atualiza usuário
    static updateUser(userId, dadosNovos) {
        return cy.request({
            method: 'PUT',
            url: `/usuarios/${userId}`,
            body: dadosNovos,
            failOnStatusCode: false
        });
    }

    // Remove usuário
    static deleteUser(userId) {
        return cy.request({
            method: 'DELETE',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }
}

export default UserService;
