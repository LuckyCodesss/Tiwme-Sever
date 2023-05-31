const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/fifa?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

const bodyParser = require('body-parser');
global.User = require("./api/models/UserModel")
global.Project = require("./api/models/projectModel")
global.Tool = require("./api/models/toolModel")
global.Community = require("./api/models/communityModel")
const Route = require('./api/routes/Route')

const port = process.env.port || 9999;
const app = express();

app.set('view engine','ejs')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

Route(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})

console.log(`Sever started on port ${port}`);