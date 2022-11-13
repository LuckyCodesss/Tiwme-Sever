const mongoose = require('mongoose');
const user = mongoose.model('User');
const tool = mongoose.model('Tool');
const project = mongoose.model('Project');
const community = mongoose.model('Community');

exports.list_all = (req, res) => {
    user.find({}, (err, users) => {
        if (err) res.send(err);
        res.json(users);
    })
    tool.find({}, (err, tools) => {
        if (err) res.send(err);
        res.json(tools);
    })
}

exports.create = (req, res) => {
    const newuser = new user(req.body);
    const newtool = new tool(req.body);
    const newproject = new project(req.body);
    const newcommunity = new community(req.body);

    newuser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
    newtool.save((err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}

exports.read = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
    tool.findById(req.params.toolId, (err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}

exports.update = (req, res) => {
    user.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true },
        (err, user) => {
            if (err) res.send(err);
            res.json(user);
        }
    )
    tool.findOneAndUpdate(
        { _id: req.params.toolId },
        req.body,
        { new: true },
        (err, tool) => {
            if (err) res.send(err);
            res.json(tool);
        }
    )
}

exports.delete = (req, res) => {
    user.deleteOne({ _id: req.params.userId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'user succesfully deleted',
            _id: req.params.userId
        })
    })
    tool.deleteOne({ _id: req.params.toolId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'tool succesfully deleted',
            _id: req.params.toolId
        })
    })
}
