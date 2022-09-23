// app.js

const express = require('express');
const app = express();

const path = require('path');

//config
const configPath = path.resolve(__dirname, `.env.${process.env.NODE_ENV}`);
require('dotenv').config({
    override: true,
    path: configPath
});

// database service
const database = require('./src/services/database.service');
database.connect();


// middlewares
const helmet = require('helmet');


app.use(helmet());

app.get('/', (req, res) => {
    res.send('Home');
});

app.listen(process.env.API_PORT, () => {
    console.log(`Server running on port ${process.env.API_PORT}`)    
})