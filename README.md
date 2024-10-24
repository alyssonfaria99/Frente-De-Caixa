# Frente-De-Caixa

# PDV API (Frente de Caixa)

## Descrição do Projeto
Este projeto consiste na criação de uma API para um sistema de PDV (Frente de Caixa). O projeto está dividido em diferentes sprints com o objetivo de construir funcionalidades incrementais, começando pela manipulação de dados de categorias e usuários, avançando para produtos, clientes e pedidos. A API é desenvolvida em **Node.js** com **PostgreSQL** como banco de dados e inclui a utilização de autenticação via **Bearer Token** para proteger as rotas.

## Funcionalidades

### 1ª Sprint
- Cadastro de usuários com validação de email único e criptografia de senha.
- Login de usuários com geração de token de autenticação.
- Listar categorias previamente cadastradas.
- Visualizar e editar perfil do usuário logado.

### 2ª Sprint
- Cadastro e edição de produtos com vínculo a categorias.
- Listar todos os produtos ou por categoria.
- Detalhar e excluir produtos cadastrados.
- Cadastro, listagem, detalhamento e edição de clientes com validação de CPF e email únicos.

### 3ª Sprint
- Cadastro e listagem de pedidos com produtos vinculados.
- Validação de estoque ao cadastrar pedidos.
- Envio de email ao cliente após o cadastro de um pedido.
- Exclusão e manipulação de imagens vinculadas a produtos.
- Aplicação de regras para impedir a exclusão de produtos vinculados a pedidos.

## Tecnologias Utilizadas
- **Node.js / Express**: Para desenvolvimento da API.
- **PostgreSQL**: Para gerenciamento do banco de dados.
- **JWT (JSON Web Token)**: Para autenticação dos usuários.
- **Bcrypt**: Para criptografia de senhas.
- **Joi**: Para criação de schemas de validação.
- **Knex**: Para construir consultas SQL utilizando JavaScript.
- **Nodemailer**: Para envio de emails.
- **Serviços de Armazenamento (Blackblaze)**: Para upload de imagens de produtos.

## Instalação
### Pré-requisitos
   - Node.js >= 14.0.0
   
   - PostgreSQL >= 13.0.0
   
1. Clone o repositório
   ```bash
   git clone https://github.com/alyssonfaria99/Frente-De-Caixa.git
   cd .\Frente-De-Caixa\
   cd '.\Ponto De Venda\'

2. Instale as dependências
   ```bash
   npm install

3. Configura as variáveis de ambiente criando um arquivo .env na raíz do projeto, seguindo o exemplo:
   ```bash
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seuusuario
   DB_PASSWORD=suasenha
   DB_DATABASE=your_database
   PORT=3000
   ENDPOINT_S3=https://your_s3_endpoint
   KEY_ID=your_key_id
   APP_KEY=your_app_key
   BACKBLAZE_BUCKET=your_backblaze_bucket
   MAIL_HOST=smtp.example.com
   MAIL_PORT=587
   MAIL_USER=your_email@example.com
   MAIL_PASS=your_email_password
   MAIL_FROM=your_email@example.com
   SENHA_JWT=your_jwt_secret

4. Utilize o arquivo schema.sql para criar o banco de dados em um ambiente PostgreSQL

## ENDPOINTS
<details>
  <summary>Cadastrar Usuário</summary>
  
  - **Endpoint**: `POST /cadastrarUsuario`
  
  - **Descrição**: Cadastra um novo usuário no banco de dados.
  
  - **Corpo da Requisição:**
    
           {
         	   "nome": "Alysson",
         	   "email": "alysson123@gmail.com",
         	   "senha": "12345"
           }
  
</details>
<details>
  <summary>Login</summary>
   
  - **Endpoint**: `POST /login`
  
  - **Descrição**: Verifica as credenciais, realiza o login e gera um token de autenticação.
  
  - **Corpo da Requisição:**
    
           {
         	   "email": "alysson123@gmail.com",
         	   "senha": "12345"
           }
  
  - **Resposta:**
    
         {
         	"usuario": {
         		"id": 1,
         		"nome": "Alysson",
         		"email": "alysson123@gmail.com"
         	},
         	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI5NjkyMjMyLCJleHAiOjE3MzAyMTA2MzJ9.nwazOjYS9NLyzk31__NmxB0SWZmc1WQ5_v5dUDrEUlI"
         }
        
  
</details>

A partir do Login, todas as rotas necessitam do token de autorização para serem processadas. O token é passado no formato Bearer Token.
<details>
  <summary>Detalhar Usuário Logado</summary>
   
  - **Endpoint**: `GET /usuario`
  
  - **Descrição**: Retorna as informações do usuário logado.

  - **Resposta**:
    
        {
         	"id": 1,
         	"nome": "Alysson Faria Santos",
         	"email": "alysson123@gmail.com"
        }
  
</details>
<details>
  <summary>Editar Usuário Logado</summary>
  
  - **Endpoint**: `PUT /editarUsuario`
  
  - **Descrição**: Modifica informações do usuário logado.
  
  - **Corpo da Requisição:**
    
           {
                   "nome": "Alysson Faria Santos",
         	   "email": "alysson456@gmail.com",
         	   "senha": "567890"
           }
  
</details>
<details>
  <summary>Cadastrar Produto</summary>
  
  - Descrição detalhada da primeira funcionalidade.
  - Passos para usar.
  
</details>
<details>
  <summary>Listar Produtos por Categoria</summary>
  
  - **Endpoint**: `GET /produto?categoria_id`
  
  - **Descrição**: Lista todos os produtos associados a uma categoria.

  - **Resposta**:
    
         [
         	{
         		"id": 2,
         		"descricao": "preto",
         		"quantidade_estoque": 7,
         		"valor": "800000.00",
         		"categoria_id": 1,
         		"produto_imagem": null
         	},
         	{
         		"id": 3,
         		"descricao": "vermelho",
         		"quantidade_estoque": 2,
         		"valor": "300000.00",
         		"categoria_id": 1,
         		"produto_imagem": null
         	}
         ]
  
</details>
<details>
  <summary>Detalhar Produto por ID</summary>
  
  - **Endpoint**: `GET /produto/:id`
  
  - **Descrição**: Retorna as informações do produto com o ID especificado.

  - **Resposta**:
    
         {
         	"id": 1,
         	"descricao": "ok",
         	"quantidade_estoque": 190,
         	"valor": "50001.00",
         	"categoria_id": 3,
         	"produto_imagem": null
         }
  
</details>
<details>
  <summary>Editar Produto</summary>
  
  - **Endpoint**: `PUT /editarProduto/:id`
  
  - **Descrição**: Edita o produto com o ID especificado.

  - **Exemplo de corpo de requisição**:
    
        {
         	"descricao": "camisa ",
         	"quantidade_estoque": "0",
         	"valor": "20000",
         	"categoria_id": "7"
         }
  
</details>
<details>
  <summary>Excluir Produto</summary>
  
  - **Endpoint**: `DELETE /excluirProduto/:id`
  
  - **Descrição**: Exclui o produto com o ID especificado.

  - **Resposta**:
    
        "Produto excluído com sucesso"
  
</details>
<details>
  <summary>Cadastrar Cliente</summary>
  
  - **Endpoint**: `POST /cadastrarCliente`
  
  - **Descrição**: Cadastra um novo cliente com email e CPF únicos.

  - **Exemplo de corpo de requisição**:
    
         {
         	"nome": "Alysson",
         	"email": "alyssonfaria99@gmail.com",
         	"cpf":"12345678900",
         	"cep":"35636104",
         	"rua":"Rua José Lucas Gontijo",
         	"numero":"69",
         	"bairro":"São Lucas",
         	"cidade":"Bom Despacho",
         	"estado":"MG"
         }
  
</details>
<details>
  <summary>Listar Clientes</summary>
  

  - **Endpoint**: `GET /clientes`
  
  - **Descrição**: Lista todos os clientes.

  - **Resposta**:
    
           {
         	"clientes": [
         		{
         			"id": 1,
         			"nome": "Alysson",
         			"email": "alysson123456@gmail.com",
         			"cpf": "13122233343",
         			"cep": "35636104",
         			"rua": "Rua José Lucas Gontijo",
         			"numero": "69",
         			"bairro": "São Lucas",
         			"cidade": "Bom Despacho",
         			"estado": "MG"
         		},
         		{
         			"id": 2,
         			"nome": "Alysson",
         			"email": "alyssonfaria99@gmail.com",
         			"cpf": "12345678900",
         			"cep": "35636104",
         			"rua": "Rua José Lucas Gontijo",
         			"numero": "69",
         			"bairro": "São Lucas",
         			"cidade": "Bom Despacho",
         			"estado": "MG"
         		}
         	]
         }
  
</details>
<details>
  <summary>Detalhar Cliente por ID</summary>
  
  - **Endpoint**: `GET /cliente/:id`
  
  - **Descrição**: Retorna informações do cliente com o ID especificado.

  - **Resposta**:
    
        {
      	"cliente": {
      		"id": 1,
      		"nome": "Alysson",
      		"email": "alysson123456@gmail.com",
      		"cpf": "13122233343",
      		"cep": "35636104",
      		"rua": "Rua José Lucas Gontijo",
      		"numero": "69",
      		"bairro": "São Lucas",
      		"cidade": "Bom Despacho",
      		"estado": "MG"
      	}
        }
  
</details>
<details>
  <summary>Editar Cliente</summary>
  
  - **Endpoint**: `PUT /editarCliente/:id`
  
  - **Descrição**: Altera dados do cliente com o ID especificado.

  - **Exemplo de corpo de requisição**:
    
         {
         	"nome": "Alysson",
         	"email": "alysson123456@gmail.com",
         	"cpf":"13122233343"
         }
  
</details>
<details>
  <summary>Cadastrar Pedido</summary>
  
  - **Endpoint**: `POST /cadastrarPedido`
  
  - **Descrição**: Cadastra um novo pedido vinculado a um cliente existente.

  - **Exemplo de corpo de requisição**:
    
         {
             "cliente_id": 1,
             "observacao": "Em caso de ausência recomendo deixar com algum vizinho",
             "pedido_produtos": [
                 {
                     "produto_id": 1,
                     "quantidade_produto": 10
                 }
             ]
         }
  
</details>
<details>
  <summary>Listar Pedidos</summary>
  
  - **Endpoint**: `GET /pedidos?cliente_id`
  
  - **Descrição**: Retorna todos os pedidos associados a um cliente.

  - **Resposta**:
    
            [
            	{
            		"pedido": {
            			"id": 1,
            			"cliente_id": 1,
            			"observacao": "Em caso de ausência recomendo deixar com algum vizinho",
            			"valor_total": "500010.00"
            		},
            		"pedidoProduto": [
            			{
            				"pedido_id": 1,
            				"produto_id": 1,
            				"quantidade_produto": 10,
            				"valor_produto": "50001.00"
            			}
            		]
            	},
            	{
            		"pedido": {
            			"id": 2,
            			"cliente_id": 1,
            			"observacao": "Entregar somente para o destinatário",
            			"valor_total": "100250.00"
            		},
            		"pedidoProduto": [
            			{
            				"pedido_id": 2,
            				"produto_id": 3,
            				"quantidade_produto": 5,
            				"valor_produto": "20050.00"
            			}
            		]
            	}
             ]
  
</details>
<details>
  <summary>Listar Categorias</summary>
  
  - **Endpoint**: `GET /categorias`
  
  - **Descrição**: Retorna todas as categorias de produtos.

  - **Resposta**:
    
         [
         	{
         		"id": 1,
         		"descricao": "Informática"
         	},
         	{
         		"id": 2,
         		"descricao": "Celulares"
         	},
         	{
         		"id": 3,
         		"descricao": "Beleza e Perfumaria"
         	},
         	{
         		"id": 4,
         		"descricao": "Mercado"
         	},
         	{
         		"id": 5,
         		"descricao": "Livros e Papelaria"
         	},
         	{
         		"id": 6,
         		"descricao": "Brinquedos"
         	},
         	{
         		"id": 7,
         		"descricao": "Moda"
         	},
         	{
         		"id": 8,
         		"descricao": "Bebê"
         	},
         	{
         		"id": 9,
         		"descricao": "Games"
         	}
         ]
  
</details>

