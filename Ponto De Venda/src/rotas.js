const express = require("express");
const { cadastrarUsuario, login, detalharUsuario, editarPerfilUsuarioLogado } = require("./controladores/usuarios");
const schemaUsuario = require("./validacoes/schemaUsuario");
const schemaLogin = require("./validacoes/schemaLogin");
const schemaProduto = require("./validacoes/schemaProduto");
const schemaCliente = require("./validacoes/schemaCliente");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const listarCategorias = require("./controladores/categorias");
const verificarUsuarioLogado = require("./intermediarios/autenticacao");
const { cadastrarProduto, editarProduto, listarProdutos, detalharProduto, excluirProduto } = require("./controladores/produtos");
const { cadastrarCliente, editarCliente, listarClientes, detalharCliente } = require("./controladores/clientes");
const { cadastrarPedido, listarPedidos } = require("./controladores/pedidos");
const multer = require('./servicos/multer');

const rotas = express();

rotas.post("/cadastrarUsuario", validarCorpoRequisicao.validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);
rotas.post("/login", validarCorpoRequisicao.validarCorpoRequisicao(schemaLogin), login);
rotas.get("/categorias", listarCategorias);

rotas.use(verificarUsuarioLogado);

rotas.get("/usuario", detalharUsuario);
rotas.put("/editarUsuario", validarCorpoRequisicao.validarCorpoRequisicao(schemaUsuario), editarPerfilUsuarioLogado);
rotas.post("/cadastrarProduto", validarCorpoRequisicao.validarCorpoRequisicaoComImagem(schemaProduto), multer.single('produto_imagem'), cadastrarProduto);
rotas.put("/editarProduto/:id", validarCorpoRequisicao.validarCorpoRequisicaoComImagem(schemaProduto), multer.single('produto_imagem'), editarProduto);
rotas.get("/produtos", listarProdutos);
rotas.get("/produto/:id", detalharProduto);
rotas.delete("/excluirProduto/:id", excluirProduto);
rotas.post("/cadastrarCliente", validarCorpoRequisicao.validarCorpoRequisicao(schemaCliente), cadastrarCliente);
rotas.put("/editarCliente/:id", validarCorpoRequisicao.validarCorpoRequisicao(schemaCliente), editarCliente);
rotas.get("/clientes", listarClientes);
rotas.get("/cliente/:id", detalharCliente);
rotas.post("/cadastrarPedido", cadastrarPedido);
rotas.get("/pedidos", listarPedidos);

module.exports = rotas;
