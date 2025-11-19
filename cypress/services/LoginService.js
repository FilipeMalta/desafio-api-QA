/**
 * Service class for Login endpoints
 */
class LoginService {
  /**
   * Realiza login
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   */
  static login(email, password) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: email,
        password: password
      },
      failOnStatusCode: false
    });
  }
}

export default LoginService;
