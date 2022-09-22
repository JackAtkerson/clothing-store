const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseData: {
        type: Date,
        default: Date.now
    },
    clothes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Clothes'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;