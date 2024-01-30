require('dotenv').config();
const express = require('express')
const User = require('./models/User')
const app = express()
const db = require('./db');

db.connect();

app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/test', async (req, res) => {
    const users = await User.find({});
    res.json(users);
})

app.listen(process.env.PORT || 3000)