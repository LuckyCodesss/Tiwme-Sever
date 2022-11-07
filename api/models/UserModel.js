const mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    pic:{type: String},
    projects: [
        {
          type: Schema.Types.ObjectId,
          ref: "project",
        },
      ],
})

module.exports = mongoose.model('User', userSchema)