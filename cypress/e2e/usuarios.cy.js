import UserService from '../services/UserService';

describe('Testes de API - Usuários', () => {
    let usuarioCriadoId;
    let emailUnico;

    beforeEach(() => {
        emailUnico = `usuario_${Date.now()}@qa.com.br`;
    });

    afterEach(() => {
        if (usuarioCriadoId) {
            UserService.deleteUser(usuarioCriadoId).then(() => {
                usuarioCriadoId = null;
            });
        }
    });

    context('Cenários Críticos', () => {
        it('CT01 - Deve criar um novo usuário com sucesso', () => {
            const novoUsuario = {
                nome: 'Novo Usuario QA',
                email: emailUnico,
                password: 'senha@123',
                administrador: 'false'
            };

            UserService.createUser(novoUsuario).then((resposta) => {
                expect(resposta.status).to.equal(201);
                expect(resposta.body.message).to.equal('Cadastro realizado com sucesso');
                expect(resposta.body).to.have.property('_id');

                usuarioCriadoId = resposta.body._id;

                UserService.getUserById(usuarioCriadoId).then((busca) => {
                    expect(busca.status).to.equal(200);
                    expect(busca.body.nome).to.equal(novoUsuario.nome);
                    expect(busca.body.email).to.equal(novoUsuario.email);
                });
            });
        });

        it('CT02 - Não deve permitir cadastrar usuário com email duplicado', () => {
            const novoUsuario = {
                nome: 'Usuario Email Duplicado',
                email: emailUnico,
                password: 'senha@123',
                administrador: 'false'
            };

            UserService.createUser(novoUsuario).then((primeiraResposta) => {
                expect(primeiraResposta.status).to.equal(201);
                usuarioCriadoId = primeiraResposta.body._id;

                UserService.createUser(novoUsuario).then((segundaResposta) => {
                    expect(segundaResposta.status).to.equal(400);
                    expect(segundaResposta.body.message).to.equal('Este email já está sendo usado');
                });
            });
        });
    });
});
