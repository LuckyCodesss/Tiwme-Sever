const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    age: Number,
    email: {
        type: String,
        require: true
    },
    createat: Date,
    updateat: Date,
    hobby: [String],
    id: mongoose.SchemaTypes.ObjectId,
    project: projectSchema,
    pic: String
})

module.exports = mongoose.model('User', userSchema)