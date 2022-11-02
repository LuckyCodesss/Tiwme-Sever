const FilterBuilder = require('../controllers/FilterController');

module.exports = app => {
    app
        .route('/Filters')
        .get(FilterBuilder.list_all_Filters)
        .post(FilterBuilder.create_a_Filter);
    app
        .route('/Filters/:FilterId')
        .get(FilterBuilder.read_a_Filter)
        .put(FilterBuilder.update_a_Filter)
        .delete(FilterBuilder.delete_a_Filter);
}