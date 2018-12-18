const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Promotion = mongoose.model('Promotion');
var rp = require('request-promise');
const pup = require('puppeteer');

exports.save = async (req,res) => {
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
                $('.threadtitle a').each(async(i, el) => {
                    const items = $(el).text().replace(/[`~!@#%�çÇ^&ã*()_|+\-=÷¿?;:'"<>\{\}\\\\/]/gi, '');
                    const links = $(el).attr('href');

                    promotions.push(
                        {
                            title: items,
                            url: baseUrl + links
                        }
                    );



                    const addPromotion = {
                        title: items,
                        url: baseUrl + links
                    };

                    const ModelPromotion = new Promotion(addPromotion);
                     await ModelPromotion.save();

                });
            })
            .catch(function (err) {
                console.log(err);
            });

            const json = [{
                data: {
                    message: "Promoções cadastradas com sucesso",
                    status_error: false
                }
            }];

            return json;

    } catch (err) {
        console.log(err);
    }
}




