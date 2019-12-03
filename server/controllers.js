dbHelpers = require('../database/index.js');

module.exports = {
    // getAll: (req, res) => {

    //     dbHelpers.getAll(req, (err, results) => {
    //         if (err) {
    //             res.status(404).send(err)
    //         } else {
    //             res.status(200).send(results)
    //         }
    //     })
    // },

    postOne: (req, res) => {
        console.log('controller says', req.body)
        dbHelpers.save(req, (err, results) => {
            if (err) {
                res.status(404).send(`error in controllers.postOne`)
            } else {
                res.status(200).send(results)
            }
        })
    }
}