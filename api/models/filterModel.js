const mongoose = require('mongoose');

const filterSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: Number,
    createat: Date,
    updateat: Date,
    hobby: [String],
    vote: Number
})

module.exports = mongoose.model('Filter', filterSchema)