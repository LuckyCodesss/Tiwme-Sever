const toolBuilder = require('../controllers/toolController');

module.exports = app => {
    app
        .route('/tools')
        .get(toolBuilder.list_all_tools)
        .post(toolBuilder.create_a_tool);
    app
        .route('/tools/:toolId')
        .get(toolBuilder.read_a_tool)
        .put(toolBuilder.update_a_tool)
        .delete(toolBuilder.delete_a_tool);
}