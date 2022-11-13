const mongoose = require('mongoose');
const user = mongoose.model('User');
const project = mongoose.model('Project');
const community = mongoose.model('Community');

exports.list_all = (req, res) => {
    user.find({}, (err, users) => {
        if (err) res.send(err);
        res.json(users);
    })
}

exports.create = (req, res) => {
    const newuser = new user(req.body);
    const newproject = new project(req.body);
    const newcommunity = new community(req.body);

    newuser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
}

exports.read = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
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
}

exports.delete = (req, res) => {
    user.deleteOne({ _id: req.params.userId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'user succesfully deleted',
            _id: req.params.userId
        })
    })
}
