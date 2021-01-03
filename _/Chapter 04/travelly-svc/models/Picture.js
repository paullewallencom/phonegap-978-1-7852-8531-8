var mongoose = require('mongoose');

var PictureSchema = new mongoose.Schema({
	url: String,
	title: String,
	lon: String,
	lat: String,
	fileName: String,
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Picture', PictureSchema);