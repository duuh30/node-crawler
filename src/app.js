const express      = require('express');
const app          = express();
const router       = express.Router();
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// CONNECT DATABASE MONGOOSE ROBO3T
mongoose.connect('mongodb://localhost/noderestapi',{useNewUrlParser: true});
// mongoose.promise = global.Promise;
// module.exports = mongoose;

//LOADING MODELS

const Promotion = require('./models/promotion');

//LOADING ROUTES
const index = require('./routes/index');
const promotion = require('./routes/promotion');



app.use('/', index);
app.use('/', promotion);

module.exports = app;

