const userBuilder = require('../controllers/userController');

module.exports = app => {
    app
        .route('/users')
        .get(userBuilder.list_all)
        .post(userBuilder.create);
    app
        .route('/users/:userId')
        .get(userBuilder.read)
        .put(userBuilder.update)
        .delete(userBuilder.delete);
}
