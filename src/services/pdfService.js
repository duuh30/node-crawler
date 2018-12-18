const mongoose = require('mongoose');
const Promotion = mongoose.model('Promotion');

exports.generatePdf = async (req,res) => {
    return await Promotion.find({ pdf: false});
}




