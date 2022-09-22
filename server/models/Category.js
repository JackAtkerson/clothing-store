const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: false,
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;