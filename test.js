const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.hardmob.com.br/threads/705474-Shoptime-Conjunto-Assadeiras-de-Vidro-com-Tampa-Marinex-6-Pecas-Azul-R11999-50-AME', { waitUntil: 'networkidle2' });
  await page.pdf({ path: 'pdfs/Shoptime-Conjunto-Assadeiras-de-Vidro-com-Tampa-Marinex-6-Pecas-Azul-R11999-50-AME.pdf', format: 'A4' });

  await browser.close();
})();