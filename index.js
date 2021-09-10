const bodyParser = require('body-parser');
const html_to_pdf = require('html-pdf-node');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const options = { format: 'A4' };
const generate = async (url) => {
    return await html_to_pdf.generatePdf("<h1>qsdqsdqsd</h1>", options).then(pdfBuffer => {
        return pdfBuffer
    }).catch(error => {
        console.log(error);
    })
}
express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .post('/generate', (req, res) => {
        const { html } = req.body
        return generate(html)
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))