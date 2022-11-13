const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    description: {type: String},
    pic: {type: String},
    vote: {type: Number},
})

module.exports = mongoose.model('Project', projectSchema)