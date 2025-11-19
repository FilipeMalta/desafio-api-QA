// Service para centralizar as chamadas da API de Usuários
class UserService {

    // Lista todos os usuários (pode filtrar se passar parâmetros)
    static getUsers(filtros = {}) {
        return cy.request({
            method: 'GET',
            url: '/usuarios',
            qs: filtros,
            failOnStatusCode: false
        });
    }

    // Busca um usuário específico pelo ID
    static getUserById(userId) {
        return cy.request({
            method: 'GET',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }

    // Cria um novo usuário
    static createUser(dadosUsuario) {
        return cy.request({
            method: 'POST',
            url: '/usuarios',
            body: dadosUsuario,
            failOnStatusCode: false
        });
    }

    // Atualiza os dados de um usuário existente
    static updateUser(userId, dadosNovos) {
        return cy.request({
            method: 'PUT',
            url: `/usuarios/${userId}`,
            body: dadosNovos,
            failOnStatusCode: false
        });
    }

    // Remove um usuário
    static deleteUser(userId) {
        return cy.request({
            method: 'DELETE',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }
}

export default UserService;
