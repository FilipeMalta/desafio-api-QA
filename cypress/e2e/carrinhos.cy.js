import CartService from '../services/CartService';
import ProductService from '../services/ProductService';
import UserService from '../services/UserService';
import LoginService from '../services/LoginService';

describe('API Tests - Carrinhos', () => {
    let userToken;
    let userId;
    let adminToken;
    let adminId;
    let productId;

    before(() => {
        // Criar usuário admin e produto
        const adminEmail = `admin_cart_${Date.now()}@qa.com.br`;
        const adminData = {
            nome: 'Admin Carrinho Test',
            email: adminEmail,
            password: 'admin@123',
            administrador: 'true'
        };

        UserService.createUser(adminData).then((response) => {
            adminId = response.body._id;

            LoginService.login(adminEmail, 'admin@123').then((loginResponse) => {
                adminToken = loginResponse.body.authorization;

                // Criar produto para usar no carrinho
                const productData = {
                    nome: `Produto Carrinho ${Date.now()}`,
                    preco: 1000,
                    descricao: 'Produto para testes de carrinho',
                    quantidade: 100
                };

                ProductService.createProduct(productData, adminToken).then((prodResponse) => {
                    productId = prodResponse.body._id;
                });
            });
        });

        // Criar usuário comum para testes de carrinho
        const userEmail = `user_cart_${Date.now()}@qa.com.br`;
        const userData = {
            nome: 'Usuario Carrinho Test',
            email: userEmail,
            password: 'user@123',
            administrador: 'false'
        };

        UserService.createUser(userData).then((response) => {
            userId = response.body._id;

            LoginService.login(userEmail, 'user@123').then((loginResponse) => {
                userToken = loginResponse.body.authorization;
            });
        });
    });

    after(() => {
        // Limpar dados de teste
        if (productId && adminToken) {
            ProductService.deleteProduct(productId, adminToken);
        }
        if (userId) {
            UserService.deleteUser(userId);
        }
        if (adminId) {
            UserService.deleteUser(adminId);
        }
    });

    context('Cenários Críticos', () => {
        it('CT01 - Deve criar um carrinho com sucesso', () => {
            const cartData = {
                produtos: [
                    {
                        idProduto: productId,
                        quantidade: 2
                    }
                ]
            };

            CartService.createCart(cartData, userToken).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
                expect(response.body).to.have.property('_id');
                expect(response.body._id).to.be.a('string');

                // Limpar carrinho após teste
                CartService.cancelPurchase(userToken);
            });
        });

        it('CT02 - Não deve permitir criar carrinho com produto inexistente', () => {
            const cartData = {
                produtos: [
                    {
                        idProduto: 'PRODUTO_INEXISTENTE_123',
                        quantidade: 1
                    }
                ]
            };

            CartService.createCart(cartData, userToken).then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body.message).to.equal('Produto não encontrado');
            });
        });
    });

    context('Cenários Adicionais', () => {
        it('CT03 - Não deve criar carrinho sem autenticação', () => {
            const cartData = {
                produtos: [
                    {
                        idProduto: productId,
                        quantidade: 1
                    }
                ]
            };

            CartService.createCart(cartData, '').then((response) => {
                expect(response.status).to.equal(401);
                expect(response.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
            });
        });

        it('CT04 - Deve listar todos os carrinhos', () => {
            CartService.getCarts().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property('quantidade');
                expect(response.body).to.have.property('carrinhos');
                expect(response.body.carrinhos).to.be.an('array');
            });
        });

        it('CT05 - Deve cancelar compra (deletar carrinho)', () => {
            const cartData = {
                produtos: [
                    {
                        idProduto: productId,
                        quantidade: 1
                    }
                ]
            };

            CartService.createCart(cartData, userToken).then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                CartService.cancelPurchase(userToken).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.body.message).to.include('excluído');
                });
            });
        });
    });
});
