'use strict';
const puppeteer = require('puppeteer');

const promotions = [{
  title: "test1.pdf",
  url: "https://www.hardmob.com.br/threads/705824-Amazon-eBook-Como-fazer-amigos-e-influenciar-pessoas-Dale-Carnegie-R-1797",
},
{
  title: "teste2.pdf",
  url: "https://www.hardmob.com.br/threads/705813-AMAZON-eBook-A-Queda-de-Gondolin-JRR-Tolkien-R-195",
},
{
  title: "teste3.pdf",
  url: "https://www.hardmob.com.br/threads/705718-Soraiva-Carregador-de-Parede-Belkin-Preto-21-Amp-R871",
},
{
  title: "teste4.pdf",
  url: "https://www.hardmob.com.br/threads/705827-CONECTCAR-4-Meses-GRATIS-apos-R-1990-Adesivo-gratis-CC-Itau",
},
{
  title: "teste5.pdf",
  url: "https://www.hardmob.com.br/threads/705707-NEOSOLAR-Painel-Solar-Fotovoltaico-Sinosola-SA275-60P-275Wp-R49900-frete",
}
];
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage(); 

//   promotions.forEach(async(element) => {
//   await page.goto(element.url, { waitUntil: 'networkidle2' });
//   await page.pdf({ path: 'pdfs/'+element.title+'.pdf', format: 'A4' });
//   });
  

// })();


promotions.forEach(async(element) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(element.url, { waitUntil: 'networkidle0'});
  await page.pdf({ path: 'pdfs/'+element.title, format: 'A4' });
  await page.waitForNavigation();
  await browser.close();
});





