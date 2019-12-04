dbHelpers = require('../database/index.js');

module.exports = {
    getAll: (req, res) => {
        // console.log("request coming?", req)
        dbHelpers.getAll((err, data) => {
            if (err) {
                res.status(404).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    },

    postOne: (req, res) => {
        // console.log('controller says', req.body)
        dbHelpers.save(req, (err, results) => {
            if (err) {
                res.status(404).send(`error in controllers.postOne`)
            } else {
                res.status(200).send(results)
            }
        })
    }
}