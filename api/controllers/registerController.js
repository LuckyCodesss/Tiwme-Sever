const mongoose = require('mongoose');
const register = mongoose.model('Register');

exports.list_all_registers = (req, res) => {
    register.find({}, (err, registers) => {
        if (err) res.send(err);
        res.json(registers);
    })
}

exports.create_a_register = (req, res) => {
    const newregister = new register(req.body);
    newregister.save((err, register) => {
        if (err) res.send(err);
        res.json(register);
    })
}

exports.read_a_register = (req, res) => {
    register.findById(req.params.registerId, (err, register) => {
        if (err) res.send(err);
        res.json(register);
    })
}

exports.update_a_register = (req, res) => {
    register.findOneAndUpdate(
        { _id: req.params.registerId },
        req.body,
        { new: true },
        (err, register) => {
            if (err) res.send(err);
            res.json(register);
        }
    )
}

exports.delete_a_register = (req, res) => {
    register.deleteOne({ _id: req.params.registerId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'register succesfully deleted',
            _id: req.params.registerId
        })
    })
}
