const projectBuilder = require('../controllers/projectController');

module.exports = app => {
    app
        .route('/projects')
        .get(projectBuilder.list_all_projects)
        .post(projectBuilder.create_a_project);
    app
        .route('/projects/:projectId')
        .get(projectBuilder.read_a_project)
        .put(projectBuilder.update_a_project)
        .delete(projectBuilder.delete_a_project);
}