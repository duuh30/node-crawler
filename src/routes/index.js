const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).send({
        data: [{
            application: "My first application express node js",
            version: "0.0.1"
        }]
    });
});

module.exports = router;