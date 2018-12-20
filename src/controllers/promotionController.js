'use strict';
const savePromotion = require('../services/promotionService');
const storePromotion = require('../services/promotionService');

exports.post = async (req, res, next) => {
    try{
        const promotion = await storePromotion.store(req.body);

        res.send(promotion);
        
    }catch(err){
        const json = {
            data: [{
                message: err.message,
                status_error: true
            }]
        };
        return json;
    }
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        data: [{
            msg: "promoção " + id + " foi deletada com sucesso",
            status_error: false
        }]
    });
};

exports.get = async (req, res, next) => {
    try {
        const promotions = await savePromotion.save();
        return res.status(201).send(promotions);
    } catch (err) {
        console.log(err);
    }
};






