const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()
// const recipes = require("./data")

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


// Iniciar meu servidor
server.listen(5000, function(){
    console.log("**** Servidor Rodando! ****")
})