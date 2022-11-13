const tb = require('../controllers/toolController');

module.exports = app => {
    app
        .route('/tools')
        .get(tb.list_all)
        .post(tb.create);
    app
        .route('/tools/:toolId')
        .get(tb.read)
        .put(tb.update)
        .delete(tb.delete);
}