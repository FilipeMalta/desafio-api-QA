import ProductService from '../services/ProductService';
import UserService from '../services/UserService';
import LoginService from '../services/LoginService';

describe('API Tests - Produtos', () => {
  let adminToken;
  let adminUserId;
  let createdProductId;

  before(() => {
    // Criar usuário admin e fazer login
    const adminEmail = `admin_${Date.now()}@qa.com.br`;
    const adminData = {
      nome: 'Admin Produtos Test',
      email: adminEmail,
      password: 'admin@123',
      administrador: 'true'
    };

    UserService.createUser(adminData).then((response) => {
      adminUserId = response.body._id;
      
      LoginService.login(adminEmail, 'admin@123').then((loginResponse) => {
        adminToken = loginResponse.body.authorization;
      });
    });
  });

  after(() => {
    // Limpar dados de teste
    if (adminUserId) {
      UserService.deleteUser(adminUserId);
    }
  });

  afterEach(() => {
    if (createdProductId && adminToken) {
      ProductService.deleteProduct(createdProductId, adminToken).then(() => {
        createdProductId = null;
      });
    }
  });

  context('Cenários Críticos', () => {
    it('CT01 - Deve criar um novo produto com usuário autenticado admin', () => {
      const productData = {
        nome: `Produto Teste ${Date.now()}`,
        preco: 1500,
        descricao: 'Produto para teste automatizado',
        quantidade: 50
      };

      ProductService.createProduct(productData, adminToken).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
        expect(response.body._id).to.be.a('string');
        
        createdProductId = response.body._id;

        ProductService.getProductById(createdProductId).then((getResponse) => {
          expect(getResponse.status).to.equal(200);
          expect(getResponse.body.nome).to.equal(productData.nome);
          expect(getResponse.body.preco).to.equal(productData.preco);
        });
      });
    });

    it('CT02 - Deve listar produtos com filtros aplicados', () => {
      const productData = {
        nome: `Notebook Filtro ${Date.now()}`,
        preco: 3500,
        descricao: 'Notebook para teste de filtros',
        quantidade: 100
      };

      ProductService.createProduct(productData, adminToken).then((createResponse) => {
        createdProductId = createResponse.body._id;

        ProductService.getProducts({ nome: productData.nome }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('quantidade');
          expect(response.body).to.have.property('produtos');
          expect(response.body.produtos).to.be.an('array');
          
          const foundProduct = response.body.produtos.find(p => p._id === createdProductId);
          expect(foundProduct).to.not.be.undefined;
          expect(foundProduct.nome).to.equal(productData.nome);
        });
      });
    });
  });

  context('Cenários Adicionais', () => {
    it('CT03 - Não deve criar produto sem autenticação', () => {
      const productData = {
        nome: 'Produto Sem Auth',
        preco: 500,
        descricao: 'Teste sem token',
        quantidade: 10
      };

      ProductService.createProduct(productData, '').then((response) => {
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
      });
    });

    it('CT04 - Deve listar todos os produtos', () => {
      ProductService.getProducts().then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('quantidade');
        expect(response.body).to.have.property('produtos');
        expect(response.body.produtos).to.be.an('array');
      });
    });
  });
});
