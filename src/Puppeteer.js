const puppeteer = require('puppeteer');

const Puppeteer = async () => {
  const browser = await puppeteer.launch({ headless: true, executablePath: '/usr/bin/chromium-browser'});
  const page = await browser.newPage();
  await page.goto('https://app.powerbi.com/view?r=eyJrIjoiNjc5MGUyNDYtNWZlNS00Y2Q3LTgzNDMtY2MwMjZjNWNlOWNkIiwidCI6IjcxNmU4MWVmLWI1MjItNDQ3My04ZTMxLTEwYmQwMmNjZjZlNSIsImMiOjF9');
  await page.waitForTimeout(20000);
  const element = (await page.$(`#pvExplorationHost > div > div > exploration > div > explore-canvas-modern > div > div.canvasFlexBox > div > div.displayArea.disableAnimations.fitToPage > div.visualContainerHost > visual-container-repeat > visual-container-modern:nth-child(5) > transform > div > div:nth-child(3) > div > visual-modern > div > svg > g:nth-child(1) > text > tspan`))
  let total = await page.evaluate(el => { return el.textContent }, element);
  await browser.close();

  return total;
};

module.exports = Puppeteer;