const ub = require('../controllers/allController');

module.exports = app => {
    app
        .route('/users')
        .get(ub.list_all_user)
        .post(ub.create_user);
    app
        .route('/users/:userId')
        .get(ub.read_user)
        .put(ub.update_user)
        .delete(ub.delete_user);
    app
        .route('/tools')
        .get(ub.list_all_tool)
        .post(ub.create_tool);
    app
        .route('/tools/:toolId')
        .get(ub.read_tool)
        .put(ub.update_tool)
        .delete(ub.delete_tool);
    app
        .route('/communitys')
        .get(ub.list_all_community)
        .post(ub.create_community);
    app
        .route('/communitys/:communityId')
        .get(ub.read_community)
        .put(ub.update_community)
        .delete(ub.delete_community);
}
