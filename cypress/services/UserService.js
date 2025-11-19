/**
 * Service class for Users endpoints
 */
class UserService {
    /**
     * Lista todos os usuários
     * @param {Object} queryParams - Parâmetros de query (opcional)
     */
    static getUsers(queryParams = {}) {
        return cy.request({
            method: 'GET',
            url: '/usuarios',
            qs: queryParams,
            failOnStatusCode: false
        });
    }

    /**
     * Busca usuário por ID
     * @param {string} userId - ID do usuário
     */
    static getUserById(userId) {
        return cy.request({
            method: 'GET',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }

    /**
     * Cria novo usuário
     * @param {Object} userData - Dados do usuário
     */
    static createUser(userData) {
        return cy.request({
            method: 'POST',
            url: '/usuarios',
            body: userData,
            failOnStatusCode: false
        });
    }

    /**
     * Atualiza usuário existente
     * @param {string} userId - ID do usuário
     * @param {Object} userData - Dados atualizados
     */
    static updateUser(userId, userData) {
        return cy.request({
            method: 'PUT',
            url: `/usuarios/${userId}`,
            body: userData,
            failOnStatusCode: false
        });
    }

    /**
     * Deleta usuário
     * @param {string} userId - ID do usuário
     */
    static deleteUser(userId) {
        return cy.request({
            method: 'DELETE',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }
}

export default UserService;
