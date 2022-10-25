const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Task = require('./api/models/taskModel')
const routes = require('./api/routes/taskRoutes')

mongoose.connect(
    'mongodb+srv://WebHouse:0988312131@cluster0.a6krzpb.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

const port = process.env.port || 9999;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})

console.log(`Sever started on port ${port}`);