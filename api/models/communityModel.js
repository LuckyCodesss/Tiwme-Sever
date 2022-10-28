const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    pic: String,
    head: String,
    description: [String],
    vote: Number
})

module.exports = mongoose.model('Community', communitySchema)