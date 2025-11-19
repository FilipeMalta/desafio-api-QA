import UserService from '../services/UserService';

describe('API Tests - Usuários', () => {
    let createdUserId;
    let uniqueEmail;

    beforeEach(() => {
        uniqueEmail = `usuario_${Date.now()}@qa.com.br`;
    });

    afterEach(() => {
        if (createdUserId) {
            UserService.deleteUser(createdUserId).then(() => {
                createdUserId = null;
            });
        }
    });

    context('Cenários Críticos', () => {
        it('CT01 - Deve criar um novo usuário com sucesso', () => {
            const userData = {
                nome: 'Novo Usuario QA',
                email: uniqueEmail,
                password: 'senha@123',
                administrador: 'false'
            };

            UserService.createUser(userData).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
                expect(response.body).to.have.property('_id');
                expect(response.body._id).to.be.a('string');

                createdUserId = response.body._id;

                UserService.getUserById(createdUserId).then((getResponse) => {
                    expect(getResponse.status).to.equal(200);
                    expect(getResponse.body.nome).to.equal(userData.nome);
                    expect(getResponse.body.email).to.equal(userData.email);
                });
            });
        });

        it('CT02 - Não deve permitir cadastrar usuário com email duplicado', () => {
            const userData = {
                nome: 'Usuario Email Duplicado',
                email: uniqueEmail,
                password: 'senha@123',
                administrador: 'false'
            };

            UserService.createUser(userData).then((firstResponse) => {
                expect(firstResponse.status).to.equal(201);
                createdUserId = firstResponse.body._id;

                UserService.createUser(userData).then((secondResponse) => {
                    expect(secondResponse.status).to.equal(400);
                    expect(secondResponse.body).to.have.property('message', 'Este email já está sendo usado');
                });
            });
        });
    });
});
