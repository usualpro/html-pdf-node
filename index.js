var html_to_pdf = require('html-pdf-node');
const fs = require('fs-extra');

let options = { format: 'A4' };
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

//let file = { content: "<h1>Welcome to html-pdf-node</h1>" };
// or //
let file = { url: "https://www.npmjs.com/package/html-pdf-node" };

function callbackFunction() {
    console.log("done")
}

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFile('file.pdf', pdfBuffer, callbackFunction)
});

