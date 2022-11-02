const mongoose = require('mongoose');
const tool = mongoose.model('Tool');

exports.list_all_tools = (req, res) => {
    tool.find({}, (err, tools) => {
        if (err) res.send(err);
        res.json(tools);
    })
}

exports.create_a_tool = (req, res) => {
    const newtool = new tool(req.body);
    newtool.save((err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}

exports.read_a_tool = (req, res) => {
    tool.findById(req.params.toolId, (err, tool) => {
        if (err) res.send(err);
        res.json(tool);
    })
}

exports.update_a_tool = (req, res) => {
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

exports.delete_a_tool = (req, res) => {
    tool.deleteOne({ _id: req.params.toolId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'tool succesfully deleted',
            _id: req.params.toolId
        })
    })
}
