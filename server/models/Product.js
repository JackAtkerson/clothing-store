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
    },
    image: {
        type: Image
    }
});

//create the Product model
const Product = model('Product', ProductSchema);

module.exports = Product;