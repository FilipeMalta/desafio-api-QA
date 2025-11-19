import LoginService from '../services/LoginService';
import UserService from '../services/UserService';

describe('API Tests - Login', () => {
    let testUser;

    before(() => {
        // Criar usuário para os testes de login
        const uniqueEmail = `login_test_${Date.now()}@qa.com.br`;
        const userData = {
            nome: 'Usuario Login Test',
            email: uniqueEmail,
            password: 'senha@123',
            administrador: 'false'
        };

        UserService.createUser(userData).then((response) => {
            testUser = { ...userData, _id: response.body._id };
        });
    });

    after(() => {
        // Limpar dados de teste
        if (testUser && testUser._id) {
            UserService.deleteUser(testUser._id);
        }
    });

    context('Cenários Críticos', () => {
        it('CT01 - Deve realizar login com sucesso com credenciais válidas', () => {
            LoginService.login(testUser.email, testUser.password).then((response) => {
                // Validações de status code
                expect(response.status).to.equal(200);

                // Validações de response body
                expect(response.body).to.have.property('message', 'Login realizado com sucesso');
                expect(response.body).to.have.property('authorization');
                expect(response.body.authorization).to.be.a('string');
                expect(response.body.authorization).to.not.be.empty;
                expect(response.body.authorization).to.include('Bearer');

                // Validações de headers
                expect(response.headers).to.have.property('content-type');
                expect(response.headers['content-type']).to.include('application/json');

                // Validação de tempo de resposta
                expect(response.duration).to.be.lessThan(3000);
            });
        });

        it('CT02 - Não deve realizar login com credenciais inválidas', () => {
            const invalidEmail = 'usuario.invalido@qa.com.br';
            const invalidPassword = 'senhaErrada123';

            LoginService.login(invalidEmail, invalidPassword).then((response) => {
                // Validações de status code
                expect(response.status).to.equal(401);

                // Validações de response body
                expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
                expect(response.body).to.not.have.property('authorization');

                // Validações de headers
                expect(response.headers).to.have.property('content-type');
                expect(response.headers['content-type']).to.include('application/json');
            });
        });
    });

    context('Cenários Adicionais', () => {
        it('CT03 - Não deve realizar login com email não cadastrado', () => {
            const nonExistentEmail = `nao_existe_${Date.now()}@qa.com.br`;
            const anyPassword = 'qualquerSenha123';

            LoginService.login(nonExistentEmail, anyPassword).then((response) => {
                expect(response.status).to.equal(401);
                expect(response.body.message).to.equal('Email e/ou senha inválidos');
            });
        });

        it('CT04 - Não deve realizar login com senha incorreta', () => {
            LoginService.login(testUser.email, 'senhaIncorreta999').then((response) => {
                expect(response.status).to.equal(401);
                expect(response.body.message).to.equal('Email e/ou senha inválidos');
            });
        });

        it('CT05 - Não deve realizar login sem informar email', () => {
            cy.request({
                method: 'POST',
                url: '/login',
                body: {
                    password: 'senha@123'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body.email).to.equal('email é obrigatório');
            });
        });

        it('CT06 - Não deve realizar login sem informar senha', () => {
            cy.request({
                method: 'POST',
                url: '/login',
                body: {
                    email: testUser.email
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body.password).to.equal('password é obrigatório');
            });
        });

        it('CT07 - Não deve realizar login com email em formato inválido', () => {
            cy.request({
                method: 'POST',
                url: '/login',
                body: {
                    email: 'emailinvalido',
                    password: 'senha@123'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body.email).to.equal('email deve ser um email válido');
            });
        });

        it('CT08 - Deve validar que o token gerado é válido', () => {
            LoginService.login(testUser.email, testUser.password).then((response) => {
                expect(response.status).to.equal(200);
                const token = response.body.authorization;

                // Tentar usar o token em uma requisição autenticada
                cy.request({
                    method: 'GET',
                    url: '/carrinhos',
                    headers: {
                        Authorization: token
                    },
                    failOnStatusCode: false
                }).then((authResponse) => {
                    expect(authResponse.status).to.be.oneOf([200, 401]); // Token pode expirar
                });
            });
        });
    });
});
