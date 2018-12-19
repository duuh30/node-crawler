'use strict';
const request = require('request');
const mongoose = require('mongoose');
const Promotion = mongoose.model('Promotion');
const pdfService = require('../services/pdfService');

exports.post = async (req, res, next) => {

    try {
        const promotions = await pdfService.generatePdf();
        
        return res.status(200).send(promotions);
    } catch (err) {
        console.log(err);
    }
};

