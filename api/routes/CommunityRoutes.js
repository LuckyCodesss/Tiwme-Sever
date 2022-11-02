const communityBuilder = require('../controllers/communityController');

module.exports = app => {
    app
        .route('/communitys')
        .get(communityBuilder.list_all_communitys)
        .post(communityBuilder.create_a_community);
    app
        .route('/communitys/:communityId')
        .get(communityBuilder.read_a_community)
        .put(communityBuilder.update_a_community)
        .delete(communityBuilder.delete_a_community);
}