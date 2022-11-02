const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    toolName: {type: String},
    pictool: {type: String},
    description: [{type: String}],
    vote: {type: Number}
})

module.exports = mongoose.model('Tool', toolSchema)