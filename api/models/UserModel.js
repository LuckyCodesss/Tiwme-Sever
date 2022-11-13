const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    },
    bio: {
        type: String
    },
    toolName: {
        type: String
    },
    pictool: {type: String},
    description: {type: String},
    vote: {type: Number}
})

module.exports = mongoose.model('User', userSchema)