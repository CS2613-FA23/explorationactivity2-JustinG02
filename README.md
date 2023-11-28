[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/kCrKdl4V)
# ExplorationActivity2 - JavaScript Puppeteer Package

<h2>1. Package/Library Demonstrated</h2>
The sample program showcases the usage of the Puppeteer Package in JavaScript. Puppeteer is a Node JS library developed by Google to control headless Chrome or Chromium browsers programmatically.

<h2>2. Running the Program</h2>
<p>To use Puppeteer in your JavaScript project, follow these steps:</p>

<h3>Installation:</h3>

<ol>
<li>Install Puppeteer using npm:</li>
<pre><code>npm install puppeteer</code></pre>

<h3>Importing in Your Code:</h3>

<li>In your JavaScript code, import the Puppeteer module:</li>
<pre><code>import puppeteer from 'puppeteer';</code></pre>

<li>Usage:</li>

Use Puppeteer functions for tasks such as automated testing, web scraping, performance monitoring, web crawling, and more.
Please Refer to the official Puppeteer documentation for more detailed information on available functions and usage examples.
</ol>

<h2>3. Purpose of the Program</h2>
<p>The purpose of this program is to demonstrate how to install and use Puppeteer in JavaScript. It provides a starting point for developers who want to control Chromium browsers programmatically.</p>

<h2>4. Sample Input/Output</h2>
<h3>Input:</h3> <p>URL and screenshot path</p>
<h3>Output:</h3> <p>Screenshot of the given website</p>
For example:

<pre><code>const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });
    
    await browser.close(); })();</code></pre>

Remember to replace 'https://example.com' and 'example.png' with the actual URL and name of your screenshot.
