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
  imageSrc: [String]
});

var IkeaImgs = mongoose.model('IkeaImgs', ikeaSchema);

var save = (data, callback) => {

  IkeaImgs.create({
    name: data.name,
    shortDesc: data.shortDesc,
    price: data.price,
    rating: data.rating,
    reviewNum: data.reviewNum,
    midDesc: data.midDesc,
    imageSrc: data.imageSrc
  }, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
}

var getAll = (callback) => {

  IkeaImgs.find({}, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}



module.exports.save = save;
module.exports.getAll = getAll;


/*
item name
short Description;
Price
ratings and reviews
mid descriptions
img urls

*/