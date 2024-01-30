require('dotenv').config();
const mongoose = require('mongoose');

const protocol = 'mongodb+srv';

function connect() {
	mongoose.connect(`${protocol}://${process.env.ATLAS_HOST}`, {
		user: process.env.ATLAS_USER,
		pass: process.env.ATLAS_PASS,
		dbName: 'test'
	});
}

function disconnect() {
	mongoose.connection.close();
}

module.exports = { connect, disconnect }
