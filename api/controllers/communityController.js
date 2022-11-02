const mongoose = require('mongoose');
const community = mongoose.model('Community');

exports.list_all_communitys = (req, res) => {
    community.find({}, (err, communitys) => {
        if (err) res.send(err);
        res.json(communitys);
    })
}

exports.create_a_community = (req, res) => {
    const newcommunity = new community(req.body);
    newcommunity.save((err, community) => {
        if (err) res.send(err);
        res.json(community);
    })
}

exports.read_a_community = (req, res) => {
    community.findById(req.params.communityId, (err, community) => {
        if (err) res.send(err);
        res.json(community);
    })
}

exports.update_a_community = (req, res) => {
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

exports.delete_a_community = (req, res) => {
    community.deleteOne({ _id: req.params.communityId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'community succesfully deleted',
            _id: req.params.communityId
        })
    })
}
