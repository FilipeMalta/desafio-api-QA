import UserService from '../services/UserService';

describe('Testes de API - Usuários', () => {
    let usuarioCriadoId; // Guarda o ID do usuário criado no teste
    let emailUnico; // Email único para cada teste

    // Antes de cada teste, gera um email novo
    beforeEach(() => {
        emailUnico = `usuario_${Date.now()}@qa.com.br`;
    });

    // Depois de cada teste, limpa o usuário criado
    afterEach(() => {
        if (usuarioCriadoId) {
            UserService.deleteUser(usuarioCriadoId).then(() => {
                usuarioCriadoId = null;
            });
        }
    });

    context('Cenários Críticos', () => {
        it('CT01 - Deve criar um novo usuário com sucesso', () => {
            // Dados do novo usuário
            const novoUsuario = {
                nome: 'Novo Usuario QA',
                email: emailUnico,
                password: 'senha@123',
                administrador: 'false'
            };

            // Cria o usuário
            UserService.createUser(novoUsuario).then((resposta) => {
                // Verifica se retornou status 201 (criado)
                expect(resposta.status).to.equal(201);
                expect(resposta.body).to.have.property('message', 'Cadastro realizado com sucesso');
                expect(resposta.body).to.have.property('_id');
                expect(resposta.body._id).to.be.a('string');

                usuarioCriadoId = resposta.body._id;

                // Busca o usuário criado para confirmar que foi salvo
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

            // Cria o primeiro usuário
            UserService.createUser(novoUsuario).then((primeiraResposta) => {
                expect(primeiraResposta.status).to.equal(201);
                usuarioCriadoId = primeiraResposta.body._id;

                // Tenta criar outro usuário com o mesmo email
                UserService.createUser(novoUsuario).then((segundaResposta) => {
                    // Deve retornar erro 400
                    expect(segundaResposta.status).to.equal(400);
                    expect(segundaResposta.body).to.have.property('message', 'Este email já está sendo usado');
                });
            });
        });
    });
});
