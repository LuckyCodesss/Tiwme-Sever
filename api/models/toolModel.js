const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    createat: Date,
    updateat: Date,
    hobby: [String],
    vote: Number
})

module.exports = mongoose.model('Tool', toolSchema)