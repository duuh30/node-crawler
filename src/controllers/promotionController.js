const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Promotion = mongoose.model('Promotion');
var rp = require('request-promise');
const pup = require('puppeteer');
exports.post = async (req, res, next) => {
    const promotion = new Promotion(req.body);
    try {
        if (await promotion.save()) {
            res.status(201).send({
                data: [{
                    message: "Promoção cadastrada com sucesso",
                    status_error: false
                }]
            });
        }
    } catch (err) {
        res.status(400).send({
            data: [{
                message: "Não foi possível cadastrar essa promoção",
                error: err.message,
                status_error: true
            }]
        });
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

exports.get = (req, res, next) => {
    try {
        var options = {
            uri: 'https://www.hardmob.com.br/forums/407-Promocoes',
            headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36' }
        };

        rp(options)
            .then((body) => {
                const $ = cheerio.load(body);
                const baseUrl = "www.hardmob.com.br/";
                const promotions = [];
                $('.threadtitle a').each((i, el) => {
                    const items = $(el).text().replace(/[`~!@#%�çÇ^&ã*()_|+\-=÷¿?;:'"<>\{\}\\\\/]/gi, '');
                    const links = $(el).attr('href');


                        promotions.push(
                            {
                                title: items,
                                url: baseUrl + links
                            }
                        );

                    addPromotion = {
                        title: items,
                        url: baseUrl + links
                    };
                    // for (const promotion of promotions) {
                    //     (async () => {
                    //         const browser = await pup.launch();
                    //         const page = await b.newPage();
                    //         await page.goto(promotion.url, { waitUntil: 'networkidle2' , timeout: 8000});
                    //         await page.pdf({ path: './pdfs/' + promotion.title + '.pdf', format: 'A4' });
                    //         await browser.close();
                    //     })();
                    // }
                    const ModelPromotion = new Promotion(addPromotion);
                    ModelPromotion.save();
                });
                res.status(201).send({
                    data: "Promoções cadastradas com sucesso"
                });
            })
            .catch(function (err) {
                console.log(err);
            });

    } catch (err) {
        console.log(err);
    }
};






