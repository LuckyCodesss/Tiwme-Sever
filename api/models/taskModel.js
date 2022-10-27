const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        pictureUser: {
            type: String,
            required: 'pictrue cannot be blank'
        },
        username: {
            type: String,
            required: 'username cannot be blank'
        },
    },
)

module.exports = mongoose.model('task', taskSchema)