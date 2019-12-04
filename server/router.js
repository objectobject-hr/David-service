const router = require('express').Router();
const controllers = require('./controllers.js');

router
    .route('/ikea')
    .get(controllers.getAll)
    .post(controllers.postOne)

module.exports = router;