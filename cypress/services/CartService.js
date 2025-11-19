// Chamadas da API de Carrinhos
class CartService {

    // Lista carrinhos
    static getCarts() {
        return cy.request({
            method: 'GET',
            url: '/carrinhos',
            failOnStatusCode: false
        });
    }

    // Busca carrinho por ID
    static getCartById(cartId) {
        return cy.request({
            method: 'GET',
            url: `/carrinhos/${cartId}`,
            failOnStatusCode: false
        });
    }

    // Cria carrinho (requer token)
    static createCart(dadosCarrinho, token) {
        return cy.request({
            method: 'POST',
            url: '/carrinhos',
            headers: {
                Authorization: token
            },
            body: dadosCarrinho,
            failOnStatusCode: false
        });
    }

    // Cancela compra
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

    // Finaliza compra
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
