const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Produtos = new Schema({

    categoria: {
        type: String,
    },
    descricao: {
        type: String,
    },
    preco: {
        type: String,
    },
    precofinal: {
        type: String,
    },
    imagens: {
        type: String,
    }
})

mongoose.model('produtos', Produtos)