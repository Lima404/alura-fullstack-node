const fs = require("fs")
const favoritos = require("../favoritos.json")

function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync("favoritos.json") )
}

function insereFavorito(param) {
    const favorito = JSON.parse( fs.readFileSync("livros.json") )
    console.log(favorito)
    const validarDup = favorito.find(favorito => favorito.id = param.id)
    console.log(validarDup)
    const novaListaDeLivrosFavoritos = [...favoritos, param]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse( fs.readFileSync("favoritos.json") )

    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}