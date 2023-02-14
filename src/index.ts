const puppeteer = require('puppeteer');

async function scrape() {
    let browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    });
    let page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
    await page.screenshot({path :'exemple.png'});
    await browser.close();
}


scrape();