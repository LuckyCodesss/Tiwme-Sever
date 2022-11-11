const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', userSchema)