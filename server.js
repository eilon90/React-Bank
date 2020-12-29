const express = require('express');
const path = require('path');
const app = express();
const api = require('./server/routes/api');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bank');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api);


const PORT = 4000;
app.listen(process.env.PORT || PORT, function() {
    console.log(`Running`);
})