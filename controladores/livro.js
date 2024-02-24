const { getTodosLivros, getLivroId, insereLivro, modificaLivro, apagaLivroId } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try{
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.send("Item modificado com sucesse!")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id
        apagaLivroId(id)
        res.send("Item foi deletado com sucesso!")

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}