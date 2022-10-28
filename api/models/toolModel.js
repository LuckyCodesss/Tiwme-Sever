const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    toolName: String,
    pictool: String,
    description: [String],
    vote: Number
})

module.exports = mongoose.model('Tool', toolSchema)