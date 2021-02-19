const express = require('express')
const routes = express.Router()
const recipes = require('./recipes')

//HOME

//INDEX
routes.get('/', function(req, res){
    return res.render("home/index")
})

// SOBRE
routes.get('/sobre', function(req,res){
    return res.render("home/sobre")
})

// ADMIN

// MOSTRAR A LISTA DE RECEITAS
routes.get('/recipes', function(req,res) {
    return res.render("admin/recipes")
})

// Mostrar formulário de nova receita
routes.get('/admin/recipes/create', function (req,res) {
    return res.render("admin/recipes/create")
})

//Cadastrar nova receita
routes.post("/admin/recipes", recipes.post)

// exibir detalhes de uma receita
routes.get('/admin/show', function(req,res) {
    return res.render("admin/recipes/show")
})



module.exports = routes

// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita