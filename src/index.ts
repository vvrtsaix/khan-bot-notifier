import puppeteer from 'puppeteer';

const KHANBANK_USERNAME = "vvrtsaix.n";
const KHANBANK_PASSWORD = "88012988aZ!";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://e.khanbank.com/auth/login');

  await page.setViewport({ width: 1080, height: 1024 });

  await page.type('input#username', KHANBANK_USERNAME);
  await page.type('input#password', KHANBANK_PASSWORD);
  await page.click('button[type="submit"]');


  const accountMenu = await page.waitForSelector('[href="/account"]');
  accountMenu?.click();
  const statementButton = await page.waitForSelector('.ctrl-btn');
  statementButton?.click();

  await browser.close();
})();