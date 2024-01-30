const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	price: Number,
}, {
	toJSON: {
		virtuals: true,
		versionKey: false,
		
	}
});

module.exports = mongoose.model('products', productSchema);