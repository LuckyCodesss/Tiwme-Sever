const mongoose = require('mongoose');
const user = mongoose.model('User');

exports.list_all_users = (req, res) => {
    user.find({}, (err, users) => {
        if (err) res.send(err);
        res.json(users);
    })
}

exports.create_a_user = (req, res) => {
    const newuser = new user(req.body);
    newuser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
}

exports.read_a_user = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
}

exports.update_a_user = (req, res) => {
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

exports.delete_a_user = (req, res) => {
    user.deleteOne({ _id: req.params.userId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'user succesfully deleted',
            _id: req.params.userId
        })
    })
}
