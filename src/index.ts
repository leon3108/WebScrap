const puppeteer = require('puppeteer');
import account from '../config.js';

async function scrape() {
    let browser = await puppeteer.launch({
        headless: true,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    });
    
    let page = await browser.newPage();
    // await page.goto("https://www.instagram.com/?hl=fr");
    await page.goto("https://en.wikipedia.org/wiki/Puppeteer");

    // const cookieButton = '[class="_a9-- _a9_1"]';                    //Instagram
    // const cookieButton = '[class="yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m "]';  // youtube
    // await page.waitForSelector(cookieButton);
    // await page.click(cookieButton);
    
    let element = await page.$('[class="hatnote navigation-not-searchable"]');
    let value = await page.evaluate(el => el.textContent, element);
    console.log((value));
    
    // await page.waitForTimeout(1000);


    // let loginInput:string = '[type="text"]';
    // let passwordInput:string = '[type="password"]';
    // let submitButton = '[class="_acan _acap _acas _aj1-"]';
    // await page.waitForSelector(loginInput);
    // await page.waitForSelector(passwordInput);
    // await page.waitForSelector(submitButton);

    // await page.type(loginInput, account.login);
    // await page.type(passwordInput, account.password);
    // await page.click(submitButton);



    // await page.screenshot({path :'exemple.png'});
    await browser.close();
}


scrape();
