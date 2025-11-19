// Service para centralizar as chamadas da API de Carrinhos
class CartService {

    // Lista todos os carrinhos
    static getCarts() {
        return cy.request({
            method: 'GET',
            url: '/carrinhos',
            failOnStatusCode: false
        });
    }

    // Busca um carrinho específico pelo ID
    static getCartById(cartId) {
        return cy.request({
            method: 'GET',
            url: `/carrinhos/${cartId}`,
            failOnStatusCode: false
        });
    }

    // Cria um novo carrinho (precisa estar logado e passar o token)
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

    // Cancela a compra (remove o carrinho e devolve produtos ao estoque)
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

    // Finaliza a compra (remove o carrinho e baixa o estoque)
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
