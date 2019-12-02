const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ikea');

let ikeaSchema = new mongoose.Schema({
  imageSrc: { type: String, unique: true }
});

var IkeaImg = mongoose.model('IkeaImg', ikeaSchema);

var save = (img, callback) => {

}