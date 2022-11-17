const mongoose = require('mongoose');
const user = mongoose.model('User');
const project = mongoose.model('Project');
const tool = mongoose.model('Tool');
const community = mongoose.model('Community');



//pull all data
exports.list_all_user = (req, res) => {
    user.find({}, (err, users) => {
        if (err) res.send(err);
        res.json(users);
    })
    res.render("user",{users:user})
}
exports.list_all_project = (req, res) => {
    project.find({}, (err, projects) => {
        if (err) res.send(err);
        res.json(projects);
    })
}
exports.list_all_tool = (req, res) => {
    tool.find({}, (err, tools) => {
        if (err) res.send(err);
        res.json(tools);
    })
}
exports.list_all_community = (req, res) => {
    community.find({}, (err, communitys) => {
        if (err) res.send(err);
        res.json(communitys);
    })
}



//create data
exports.create_user = (req, res) => {
    const newuser = new user(req.body);
    newuser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
}
exports.create_project = (req, res) => {
    const newproject = new project(req.body);
    newproject.save((err, project) => {
        if (err) res.send(err);
        res.json(project);
    })
}
exports.create_tool = (req, res) => {
    const newtool = new tool(req.body);
    newtool.save((err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}
exports.create_community = (req, res) => {
    const newcommunity = new community(req.body);
    newcommunity.save((err, community) => {
        if (err) res.send(err);
        res.json(community);
    })
}



//pull data
exports.read_user = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
}
exports.read_project = (req, res) => {
    project.findById(req.params.projectId, (err, project) => {
        if (err) res.send(err);
        res.json(project);
    })
}
exports.read_tool = (req, res) => {
    tool.findById(req.params.toolId, (err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}
exports.read_community = (req, res) => {
    community.findById(req.params.communityId, (err, community) => {
        if (err) res.send(err);
        res.json(community);
    })
}



//update data
exports.update_user = (req, res) => {
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
exports.update_project = (req, res) => {
    project.findOneAndUpdate(
        { _id: req.params.projectId },
        req.body,
        { new: true },
        (err, project) => {
            if (err) res.send(err);
            res.json(project);
        }
    )
}
exports.update_tool = (req, res) => {
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
exports.update_community = (req, res) => {
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
exports.delete_project = (req, res) => {
    project.deleteOne({ _id: req.params.projectId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'project succesfully deleted',
            _id: req.params.projectId
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
