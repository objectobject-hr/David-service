const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ikea');

const db = mongoose.connection;

db.on('error', console.error.bind(console, `connection error: `));
db.once('open', () => console.log(`we're connected to  l e w d   b e a t s`));

var ikeaSchema = new mongoose.Schema({
  name: String,
  shortDesc: String,
  price: Number,
  rating: Number,
  reviewNum: Number,
  midDesc: String,
  imageSrc: [{
    type: String
  }]
});

var IkeaImgs = mongoose.model('IkeaImgs', ikeaSchema);

var save = (req, callback) => {

  IkeaImgs.create({
    name: req.body.name,
    shortDesc: req.body.shortDesc,
    price: req.body.price,
    rating: req.body.rating,
    reviewNum: req.body.reviewNum,
    midDesc: req.body.midDesc,
    imageSrc: req.body.imageSrc
  }, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })

}

// var get = (callback) => {

//   IkeaImg.
// }

module.exports.save = save;


/*
item name
short Description;
Price
ratings and reviews
mid descriptions
img urls

*/