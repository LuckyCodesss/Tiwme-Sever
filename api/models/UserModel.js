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
    age: {type: Number},
    email: {
        type: String,
        require: true
    },
    hobby: [{type: String}],
    pic:{type: String}
})

module.exports = mongoose.model('User', userSchema)