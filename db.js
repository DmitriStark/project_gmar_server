require('dotenv').config();
const mongoose = require('mongoose');

const protocol = 'mongodb+srv';

function connect() {
    mongoose.connect(`mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@${process.env.ATLAS_HOST}/test`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB Atlas!');
    });
}


function disconnect() {
	mongoose.connection.close();
}

module.exports = { connect, disconnect }
