const ub = require('../controllers/userController');

module.exports = app => {
    app
        .route('/users')
        .get(ub.list_all)
        .post(ub.create);
    app
        .route('/users/:userId')
        .get(ub.read)
        .put(ub.update)
        .delete(ub.delete);
}
