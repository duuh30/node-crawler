'use strict';
const promotionRoutes = require('./promotion');
const pdfController = require('./pdf');

module.exports = function (app) {

   app.use('/promocao', promotionRoutes);
   app.use('/pdf', pdfController);

   app.get('/', (req, res) => {
       res.status(200).json({"message": 'My first application express node js'});
   });

};