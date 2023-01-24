const moongose = require('mongoose');


var pedidoSchema = new moongose.Schema(
    {
        mozo: { type: String, require: true },
        mesa: { type: Number, require: true },
        cafe: { type: Number },
        medialunas: { type: Number },
        tostadas: { type: Number },
        exprimido: { type: Number },
        soda: { type: Number },
        total: { type: Number },
        estado: { type: String, enum: ['En preparacion', 'Retirar pedido', 'Entregado'] }
    }
);

module.exports = moongose.model('Pedido', pedidoSchema);