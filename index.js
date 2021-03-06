const bodyParser = require('body-parser')
const html_to_pdf = require('html-pdf-node')
const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3000
const options = { format: 'A4' }

express()
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .post('/generate', (req, res) => {
        const { html } = req.body;
        let file = { content: html }
        html_to_pdf.generatePdf(file, options).then(pdfBuffer => res.send(pdfBuffer))
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
