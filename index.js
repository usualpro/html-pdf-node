const html_to_pdf = require('html-pdf-node');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const options = { format: 'A4' };

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .post('/generate', (req, res) => {
        console.log(req)
        //const { url } = req.query
        /*html_to_pdf.generatePdf(url, options).then(pdfBuffer => {
            return pdfBuffer
        })*/
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))