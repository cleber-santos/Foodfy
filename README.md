<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
  Foodfy - Refatorado
</h2>
<h3 align="center">
  Refatorar o desafio Foodfy.
<br>
<br>  

<p align="center">

  <a href="https://github.com/cleber-santos">
    <img alt="Made by Cleber" src="https://img.shields.io/badge/Made%20by-Cleber-orange?style=flat&logo=github">
  </a>
  <a href="https://www.linkedin.com/in/cleber-rodrigo-santos/">
    <img alt="Made by Cleber" src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue">
  </a>

</p>

## ✍ Desafio Refatorar o Foodfy

### Refatorando

Neste desafio foi refatorado o projeto Foodfy, usando o nunjucks como template engine e adicionando um servidor com node.js e o express.

##### Arquivo de Dados

- [x] Criar um Arquivo de dados, `data.js` com dados sobre as receitas.
- [x] Use os dados das receitas contidos no arquivo data.js para a página de listagem de receitas e para a home.
- [x] Na home, liste as 6 primeiras receitas
- [x] Na listagem, liste todas receitas do arquivo.
- [x] Ao clicar em uma receita agora o usuário deve ser redirecionado para uma nova página contendo todas informações da receita como ingredientes, modo de preparo e informações adicionais.
- [x] Na página com detalhes da receita, foi adicionado um botão para mostrar/esconder detalhes.

Obs.: O projeto foi convertido em node.js usando o nunjucks.  


##### Obter ID da receita atráves da URL no Node.js

  
```js

    server.get("/recipes/:index", function(req,res){

        const recipeIndex = req.params.index

        return res.render("recipes", {item: recipes[recipeIndex]})
    })

```

## :gear: Como usar
```bash
# Clone este repositorio
$ git clone https://github.com/cleber-santos/Foodfy-refatorado.git

# Va até o repositorio
$ cd Foodfy-refatorado

# Instale as depedencias do projeto
$ npm install

# Rode o servidor
$ npm start

```

## :film_strip: Demonstração

![gif](https://github.com/cleber-santos/Foodfy-refatorado/blob/master/public/assets/Foodfy.gif)

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito por Cleber Santos | [linkedin](https://www.linkedin.com/in/cleber-rodrigo-santos/) - com a [Rocketseat](https://rocketseat.com.br) :rocket: | [Entre na comunidade da rocketseat!](https://discordapp.com/invite/gCRAFhc) :purple_heart:
