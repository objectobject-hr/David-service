const router = require('express').Router();
const controllers = require('./controllers.js');

router
    .route('/ikea')
    .get((req, res) => (res.status(200).send('hello world')))
    .post(controllers.postOne)

module.exports = router;