// importar express
const express = require('express')

// importar nunjucks
const nunjucks = require('nunjucks')

// criar servidor
const server = express()



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
    return res.render("index")
})

server.get("/sobre", function(req,res){
    return res.render("sobre")
})

server.get("/receitas", function(req,res){
    return res.render("receitas")
})


// Iniciar meu servidor
server.listen(5000, function(){
    console.log("**** Servidor Rodando! ****")
})