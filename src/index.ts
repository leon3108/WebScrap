const puppeteer = require('puppeteer');

async function scrape() {
    let browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    });
    let page = await browser.newPage();
    await page.goto("https://www.instagram.com/?hl=fr");

    const button = '[class="_a9-- _a9_1"]';
    await page.waitForSelector(button);;
    await page.click(button);

    // await page.screenshot({path :'exemple.png'});
    await browser.close();
}


scrape();
