'use strict';
const express      = require('express');
const app          = express();
const router       = express.Router();
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//LOADING DATABASE;
const database = require('./config/database');

//LOADING MODELS

const Promotion = require('./models/promotion');

//LOADING ROUTES
const index = require('./routes/index');
const promotion = require('./routes/promotion');



app.use('/', index);
app.use('/', promotion);

module.exports = app;

