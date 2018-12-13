const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Promotion = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    url: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
});

module.exports = mongoose.model('Promotion', Promotion);