const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: String,
    fullName: String,
    description: [String],
    pic: String,
    vote: Number,
})

module.exports = mongoose.model('Project', projectSchema)