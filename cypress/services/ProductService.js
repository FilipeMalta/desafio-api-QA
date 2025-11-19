// Service para centralizar as chamadas da API de Produtos
class ProductService {

    // Lista todos os produtos (pode filtrar se passar parâmetros)
    static getProducts(filtros = {}) {
        return cy.request({
            method: 'GET',
            url: '/produtos',
            qs: filtros,
            failOnStatusCode: false
        });
    }

    // Busca um produto específico pelo ID
    static getProductById(productId) {
        return cy.request({
            method: 'GET',
            url: `/produtos/${productId}`,
            failOnStatusCode: false
        });
    }

    // Cria um novo produto (precisa ser admin e passar o token)
    static createProduct(dadosProduto, token) {
        return cy.request({
            method: 'POST',
            url: '/produtos',
            headers: {
                Authorization: token
            },
            body: dadosProduto,
            failOnStatusCode: false
        });
    }

    // Atualiza um produto existente (precisa ser admin)
    static updateProduct(productId, dadosNovos, token) {
        return cy.request({
            method: 'PUT',
            url: `/produtos/${productId}`,
            headers: {
                Authorization: token
            },
            body: dadosNovos,
            failOnStatusCode: false
        });
    }

    // Remove um produto (precisa ser admin)
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
