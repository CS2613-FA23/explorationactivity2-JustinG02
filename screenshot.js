const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')({sigint: true});

// Prompt user for input
let input = prompt("Please enter your query: ");

(async () => {
  // Open browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Type "Hello World!" in the search input and press Enter
  await page.type("*[name='q']", input);
  await page.keyboard.press('Enter');

  // Wait for search results to load
  await page.waitForSelector('#search');

  // Take a screenshot of the search results
  await page.screenshot({ path: 'search_results.png' });

  // Close browser
  await browser.close();
})();