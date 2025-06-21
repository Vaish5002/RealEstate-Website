const fs = require('fs');
const { JSDOM } = require('jsdom');

const htmlContent = fs.readFileSync('index.html', 'utf-8');

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

const heading = document.querySelector('.text-box h1');
console.log('Main Heading:', heading ? heading.textContent : 'Not found');

const navLinks = document.querySelectorAll('.nav-links ul li a');
console.log('Total Navigation Links:', navLinks.length);

const categories = document.querySelectorAll('.course-col h3');
console.log('\nProperty Categories:');
categories.forEach((cat, index) => {
  console.log(`${index + 1}. ${cat.textContent}`);
});

const cityTitles = document.querySelectorAll('.layer h3');
console.log('\nFeatured Locations:');
cityTitles.forEach((city, index) => {
  console.log(`${index + 1}. ${city.textContent}`);
});
