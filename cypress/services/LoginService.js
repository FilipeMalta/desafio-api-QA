// Service para centralizar as chamadas da API de Login
class LoginService {
    
    // Faz login com email e senha
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
