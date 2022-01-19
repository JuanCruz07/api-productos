const express = require('express')

const routes = require('./src/routes/index.js')

const app = express()

app.use(express.json())

app.use('/api', routes)

const PORT = 8080

app.listen(PORT, () => {
    console.log('Servidor escuchando en 8080')
})
