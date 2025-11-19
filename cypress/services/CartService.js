/**
 * Service class for Cart endpoints
 */
class CartService {
  /**
   * Lista todos os carrinhos
   */
  static getCarts() {
    return cy.request({
      method: 'GET',
      url: '/carrinhos',
      failOnStatusCode: false
    });
  }

  /**
   * Busca carrinho por ID
   * @param {string} cartId - ID do carrinho
   */
  static getCartById(cartId) {
    return cy.request({
      method: 'GET',
      url: `/carrinhos/${cartId}`,
      failOnStatusCode: false
    });
  }

  /**
   * Cria novo carrinho (requer autenticação)
   * @param {Object} cartData - Dados do carrinho
   * @param {string} token - Token de autenticação
   */
  static createCart(cartData, token) {
    return cy.request({
      method: 'POST',
      url: '/carrinhos',
      headers: {
        Authorization: token
      },
      body: cartData,
      failOnStatusCode: false
    });
  }

  /**
   * Cancela compra (deleta carrinho)
   * @param {string} token - Token de autenticação
   */
  static cancelPurchase(token) {
    return cy.request({
      method: 'DELETE',
      url: '/carrinhos/cancelar-compra',
      headers: {
        Authorization: token
      },
      failOnStatusCode: false
    });
  }

  /**
   * Conclui compra (deleta carrinho)
   * @param {string} token - Token de autenticação
   */
  static completePurchase(token) {
    return cy.request({
      method: 'DELETE',
      url: '/carrinhos/concluir-compra',
      headers: {
        Authorization: token
      },
      failOnStatusCode: false
    });
  }
}

export default CartService;
