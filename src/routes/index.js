const { Router } = require('express')
const productosRouter = require('./productos.routes.js')

const routes = Router()

routes.use('/productos', productosRouter)

module.exports = routes