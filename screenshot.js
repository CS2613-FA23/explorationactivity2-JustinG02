const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://google.ca/');
    await page.screenshot({ path: 'google.png' });
    
    await browser.close(); })();
