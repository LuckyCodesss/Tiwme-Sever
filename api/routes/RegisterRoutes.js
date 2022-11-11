const registerBuilder = require('../controllers/registerController');

module.exports = app => {
    app
        .route('/registers')
        .get(registerBuilder.list_all_registers)
        .post(registerBuilder.create_a_register);
    app
        .route('/registers/:registerId')
        .get(registerBuilder.read_a_register)
        .put(registerBuilder.update_a_register)
        .delete(registerBuilder.delete_a_register);
}
