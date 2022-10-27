const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        name: {
            type: String,
            required: 'pictrue cannot be blank'
        },
        task2: {
            type: String,
            required: 'username cannot be blank'
        },
    },
)

module.exports = mongoose.model('task', taskSchema)