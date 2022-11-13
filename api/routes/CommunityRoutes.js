const cb = require('../controllers/communityController');

module.exports = app => {
    app
        .route('/communitys')
        .get(cb.list_all)
        .post(cb.create);
    app
        .route('/communitys/:communityId')
        .get(cb.read)
        .put(cb.update)
        .delete(cb.delete);
}