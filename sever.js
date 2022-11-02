const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/fifa?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

const bodyParser = require('body-parser');
//global.Task = require('./api/models/taskModel')
//const routes = require('./api/routes/taskRoutes')
global.User = require("./api/models/UserModel")
global.Project = require("./api/models/projectModel")
global.Community = require("./api/models/communityModel")
global.Tool = require("./api/models/toolModel")
const userRoutes = require('./api/routes/userRoutes')
const projectRoutes = require('./api/routes/projectRoutes')
const communityRoutes = require('./api/routes/communityRoutes')
const toolRoutes = require('./api/routes/toolRoutes')

const port = process.env.port || 9999;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

userRoutes(app);
projectRoutes(app);
communityRoutes(app);
toolRoutes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})

console.log(`Sever started on port ${port}`);