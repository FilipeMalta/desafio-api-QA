// Chamadas da API de Login
class LoginService {

    // Faz login
    static login(email, senha) {
        return cy.request({
            method: 'POST',
            url: '/login',
            body: {
                email: email,
                password: senha
            },
            failOnStatusCode: false
        });
    }
}

export default LoginService;
