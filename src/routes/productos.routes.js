const { Router } = require('express')
const contenedor = require('../../contenedor.js')

const routes = Router()

const cont = new contenedor('productos')

routes.get('/obtenerTodos', async (req, res, next) => {
    try {
        const prod = await cont.getAll()
        res.status(200).send(prod)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

routes.get('/obtenerProdRandom', async (req, res, next) => {
    try {
        const prod = await cont.getAll()
        let index = Math.floor(Math.random() * prod.length)
        res.status(200).send(prod[index]) 
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = routes