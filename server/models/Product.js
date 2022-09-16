const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    productName: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    }
});

//create the Product model
const Product = model('Product', ProductSchema);

module.exports = Product;