const express = require('express');
const cocinaRouter = express.Router();
const mongoose = require('mongoose');
const pedidoModel = require('../models/pedido');
const Pedido = pedidoModel.model('Pedido');



cocinaRouter.get('/', (req, res) => {
    Pedido.find({}, {}, (err, pedido) => {
        handleErr(err, res);
        res.status(200).render('cocina', { title: "Lista de Pedidos", pedido: pedido });
    });
});


cocinaRouter.post('/', (req, res) => {
    console.log('POST : ' + req.body);
    var pedido = new Pedido({
        mozo: req.body.mozo,
        mesa: req.body.mesa,
        cafe: req.body.cafe,
        medialunas: req.body.medialunas,
        tostadas: req.body.tostadas,
        exprimido: req.body.exprimido,
        soda: req.body.soda,
        total: req.body.total,
        estado: req.body.estado

    });
    pedido.save((err, pedido) => {
        handleErr(err, res);
        res.status(200).redirect("/cocina");
    }
    );
});


cocinaRouter.put('/', (req, res, next) => {
    Pedido.updateOne({ _id: req.body._id }, req.body, (err, response) => {
        handleErr(err, res);
        res.status(200).redirect("/cocina");
    });
});


cocinaRouter.get('/edit/:id', (req, res, next) => {
    Pedido.find({ _id: req.params.id }, (err, response) => {
        handleErr(err, res);
        res.status(200).render('cambiarEstado', { pedido: response[0] });
    });
});


cocinaRouter.delete('/', (req, res, next) => {
    Pedido.deleteOne({ _id: req.body._id }, (err) => {
        handleErr(err, res);
        res.status(200).redirect("/cocina");
    });
});

handleErr = (err, res) => {
    if (err) {
        res.status(500).send(err.message);
    }
};


cocinaRouter.get('/delete/:id', (req, res, next) => {
    Pedido.findOne({ _id: req.params.id }, { _id: 1, title: 1 }, (err, pedido) => {
        handleErr(err, res);
        res.status(200).render('borrarPedido', { pedido: pedido });
    });
});



module.exports = cocinaRouter;