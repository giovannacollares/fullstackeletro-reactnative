const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


app.use(express.json())
app.use(cors())

require('./src/models/Comentario')
const Comentario = mongoose.model('comentario')

require('./src/models/Pedidos')
const Pedidos = mongoose.model('pedidos')

require('./src/models/Produtos')
const Produtos = mongoose.model('produtos')

require('./src/db/connect')

app.get('/produtos', async(req,res) => {
    const produtosResponse = await Produtos.find()
    const produtosJson = await produtosResponse

    return res.json(produtosJson)
});

app.post('/comentario', async(req,res) => {

        const novoComentario = new Comentario({
        
        nome: req.body.nome,
        comentario: req.body.comentario

        })
        novoComentario.save()

        res.json({message: "Comentário enviado com sucesso!"})
        
});

app.post('/pedidos', async(req,res) => {

    const novoPedidos = new Pedidos({
    
    nomecompleto: req.body.nomecompleto,
    endereco: req.body.endereco,
    complemento: req.body.complemento,
    telefone: req.body.telefone,
    produto: req.body.produto,
    descricaopedido: req.body.descricaopedido,
    quantidade: req.body.quantidade,
    valorunitario: req.body.valorunitario,
    valortotal: req.body.valortotal
    })

    novoPedidos.save()

    res.json({message: "Pedido enviado com sucesso!"})
    
});


app.listen(3050)