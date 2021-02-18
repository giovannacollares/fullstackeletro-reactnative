const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pedidos = new Schema({

    nomecompleto: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    complemento: {
        type: String
    },
    telefone: {
        type: String,
        required: true
    },
    produto: {
        type: String,
        required: true
    },
    descricaopedido: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    },
    valorunitario: {
        type: String,
        required: true
    },
    valortotal: {
        type: String,
        required: true
    }
})

mongoose.model('pedidos', Pedidos)