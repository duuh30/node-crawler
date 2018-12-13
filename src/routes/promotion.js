'use strict';
const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

router.post('/promocao', promotionController.post);
router.get('/promocao', promotionController.get);
router.put('/promocao/:id', promotionController.put);
router.delete('/promocao/:id', promotionController.delete);

module.exports = router;