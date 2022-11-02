const mongoose = require('mongoose');
const project = mongoose.model('Project');

exports.list_all_projects = (req, res) => {
    project.find({}, (err, projects) => {
        if (err) res.send(err);
        res.json(projects);
    })
}

exports.create_a_project = (req, res) => {
    const newproject = new project(req.body);
    newproject.save((err, project) => {
        if (err) res.send(err);
        res.json(project);
    })
}

exports.read_a_project = (req, res) => {
    project.findById(req.params.projectId, (err, project) => {
        if (err) res.send(err);
        res.json(project);
    })
}

exports.update_a_project = (req, res) => {
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

exports.delete_a_project = (req, res) => {
    project.deleteOne({ _id: req.params.projectId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'project succesfully deleted',
            _id: req.params.projectId
        })
    })
}
