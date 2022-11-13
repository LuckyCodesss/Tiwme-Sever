const mongoose = require('mongoose');
const user = mongoose.model('User');
const tool = mongoose.model('Tool');
const community = mongoose.model('Community');



//pull all data
exports.list_all = (req, res) => {
    user.find({}, (err, users) => {
        if (err) res.send(err);
        res.json(users);
    })
}
exports.list_all = (req, res) => {
    tool.find({}, (err, tools) => {
        if (err) res.send(err);
        res.json(tools);
    })
}
exports.list_all = (req, res) => {
    community.find({}, (err, communitys) => {
        if (err) res.send(err);
        res.json(communitys);
    })
}



//create data
exports.create = (req, res) => {
    const newuser = new user(req.body);
    newuser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
}
exports.create = (req, res) => {
    const newtool = new tool(req.body);
    newtool.save((err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}
exports.create = (req, res) => {
    const newcommunity = new community(req.body);
    newcommunity.save((err, community) => {
        if (err) res.send(err);
        res.json(community);
    })
}



//pull data
exports.read = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    })

    tool.findById(req.params.toolId, (err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })

    community.findById(req.params.communityId, (err, community) => {
        if (err) res.send(err);
        res.json(community);
    })
}



//update data
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
exports.update = (req, res) => {
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
exports.update = (req, res) => {
    community.findOneAndUpdate(
        { _id: req.params.communityId },
        req.body,
        { new: true },
        (err, community) => {
            if (err) res.send(err);
            res.json(community);
        }
    )
}



//delete data
exports.delete_user = (req, res) => {
    user.deleteOne({ _id: req.params.userId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'user succesfully deleted',
            _id: req.params.userId
        })
    })
}
exports.delete_tool = (req, res) => {
    tool.deleteOne({ _id: req.params.toolId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'tool succesfully deleted',
            _id: req.params.toolId
        })
    })
}
exports.delete_community = (req, res) => {
    community.deleteOne({ _id: req.params.communityId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'community succesfully deleted',
            _id: req.params.communityId
        })
    })
}
