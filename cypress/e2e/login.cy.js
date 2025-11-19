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
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal('Login realizado com sucesso');
                expect(response.body).to.have.property('authorization');
                expect(response.body.authorization).to.not.be.empty;
            });
        });

        it('CT02 - Não deve realizar login com credenciais inválidas', () => {
            const invalidEmail = 'usuario.invalido@qa.com.br';
            const invalidPassword = 'senhaErrada123';

            LoginService.login(invalidEmail, invalidPassword).then((response) => {
                expect(response.status).to.equal(401);
                expect(response.body.message).to.equal('Email e/ou senha inválidos');
                expect(response.body).to.not.have.property('authorization');
            });
        });
    });
});
