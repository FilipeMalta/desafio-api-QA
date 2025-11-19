/**
 * Service class for Products endpoints
 */
class ProductService {
  /**
   * Lista todos os produtos
   * @param {Object} queryParams - Parâmetros de query (opcional)
   */
  static getProducts(queryParams = {}) {
    return cy.request({
      method: 'GET',
      url: '/produtos',
      qs: queryParams,
      failOnStatusCode: false
    });
  }

  /**
   * Busca produto por ID
   * @param {string} productId - ID do produto
   */
  static getProductById(productId) {
    return cy.request({
      method: 'GET',
      url: `/produtos/${productId}`,
      failOnStatusCode: false
    });
  }

  /**
   * Cria novo produto (requer autenticação de admin)
   * @param {Object} productData - Dados do produto
   * @param {string} token - Token de autenticação
   */
  static createProduct(productData, token) {
    return cy.request({
      method: 'POST',
      url: '/produtos',
      headers: {
        Authorization: token
      },
      body: productData,
      failOnStatusCode: false
    });
  }

  /**
   * Atualiza produto existente (requer autenticação de admin)
   * @param {string} productId - ID do produto
   * @param {Object} productData - Dados atualizados
   * @param {string} token - Token de autenticação
   */
  static updateProduct(productId, productData, token) {
    return cy.request({
      method: 'PUT',
      url: `/produtos/${productId}`,
      headers: {
        Authorization: token
      },
      body: productData,
      failOnStatusCode: false
    });
  }

  /**
   * Deleta produto (requer autenticação de admin)
   * @param {string} productId - ID do produto
   * @param {string} token - Token de autenticação
   */
  static deleteProduct(productId, token) {
    return cy.request({
      method: 'DELETE',
      url: `/produtos/${productId}`,
      headers: {
        Authorization: token
      },
      failOnStatusCode: false
    });
  }
}

export default ProductService;
