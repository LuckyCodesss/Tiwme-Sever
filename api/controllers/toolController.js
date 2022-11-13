const mongoose = require('mongoose');
const tool = mongoose.model('Tool');

exports.list_all = (req, res) => {
    tool.find({}, (err, tools) => {
        if (err) res.send(err);
        res.json(tools);
    })
}

exports.create = (req, res) => {
    const newtool = new tool(req.body);
    newtool.save((err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}

exports.read = (req, res) => {
    tool.findById(req.params.toolId, (err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
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

exports.delete = (req, res) => {
    tool.deleteOne({ _id: req.params.toolId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'tool succesfully deleted',
            _id: req.params.toolId
        })
    })
}
