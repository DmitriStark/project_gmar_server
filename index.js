require('dotenv').config();
const express = require('express')
const app = express()
const db = require('./db');

db.connect();

app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.use('/users', require('./routes/usersRoutes'));

app.listen(process.env.PORT || 3000)