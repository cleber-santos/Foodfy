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
    const sobre = {
        name: "sobre",
    }
    return res.render("sobre", { sobre: sobre })
})

server.get("/receitas", function(req,res){
    const receitas = {
        name: "receitas",
    }

    return res.render("receitas", { receitas: receitas})
})


// Iniciar meu servidor
server.listen(5000, function(){
    console.log("**** Servidor Rodando! ****")
})