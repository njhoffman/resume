#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');
const options = { format: 'Letter' };

const filePath = path.join(__dirname, '../build/bundle/index.html');
const outputPath = path.join(__dirname, '../resume.pdf');

if (!fs.existsSync(filePath)) {
  console.error(`File ${filePath} does not exist`);
}

const html = fs.readFileSync(filePath, 'utf8');

console.log('HTML', html);
pdf.create(html, options).toFile(outputPath, (err, res) => {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
