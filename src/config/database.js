'use strict';
const mongoose     = require('mongoose');

// CONNECT DATABASE MONGOOSE ROBO3T
mongoose.connect('mongodb://duuh30:nanda123@ds042128.mlab.com:42128/node-crawler',{useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/noderestapi',{useNewUrlParser: true});