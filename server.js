// importar express
const express = require('express')

// importar nunjucks
const nunjucks = require('nunjucks')

// criar servidor
const server = express()
const recipes = require("./data")


// Configurar o servidor para a pasta public
server.use(express.static('public'))

// Template engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
})

// iniciar rota
server.get("/", function(req,res){
    return res.render("index", {items: recipes})
})

server.get("/sobre", function(req,res){
    const classBody = {
        name: "sobre",
    }
    return res.render("sobre", { classBody: classBody })
})

server.get("/receitas", function(req,res){
    const classBody = {
        name: "receitas",
    }

    return res.render("receitas", { classBody: classBody, items: recipes})
})

server.get("/recipes", function(req,res){

    return res.render("recipes")
})


// Iniciar meu servidor
server.listen(5000, function(){
    console.log("**** Servidor Rodando! ****")
})