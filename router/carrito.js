import express from 'express'
import controller from '../controller/carrito.js'

const router = express.Router()

/* Router POST */
router.post('/', controller.postCarrito)
/*
Para ver como llegan al backend

router.post('/', (req,res) => {
    console.log(req.body) //como entran los datos al post

    res.json({ status: 'ok' }) // respondo en JSON
})
*/

export default router