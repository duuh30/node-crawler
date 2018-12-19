const mongoose = require('mongoose');
const Promotion = mongoose.model('Promotion');
const puppeteer = require('puppeteer');
exports.generatePdf = async (req, res) => {
    promotions = await Promotion.find({ pdf: false }).limit(5);
    const browser = await puppeteer.launch({});
    await promotions.forEach(async (element) => {
        const page = await browser.newPage();
        await page.goto('https://' + element.url, { "waitUntil": 'load' });
        await page.pdf({ path: './pdfs/' + element.title + ".pdf", format: 'A4' });

        const attPromotion = await Promotion.findByIdAndUpdate(element._id, {
            $set: {
                pdf: true,
            }
        });
    });

    const json = [
        data = [{
            message: "Pdfs gerados com sucesso",
            status_error: false
        }]
    ];

    return json;
}




