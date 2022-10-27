const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        task1: {
            type: String,
            required: 'pictrue cannot be blank'
        },
        task2: {
            type: String,
            required: 'username cannot be blank'
        },
    },
    { collection: 'task'}
)

module.exports = mongoose.model('task', taskSchema)