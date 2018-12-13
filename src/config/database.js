'use strict';
const mongoose     = require('mongoose');

// CONNECT DATABASE MONGOOSE ROBO3T
mongoose.connect('mongodb://localhost/noderestapi',{useNewUrlParser: true});