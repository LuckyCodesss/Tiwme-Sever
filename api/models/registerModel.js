const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const registerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Register', registerSchema)