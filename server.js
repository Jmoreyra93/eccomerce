import express from 'express'

import routerProductos from './router/productos.js'
import routerCarrito from './router/carrito.js'
import routerUpload from './router/upload.js'

import config from './config.js'
import Mongo_DB from './model/DB_mongo.js'

Mongo_DB.conectarDB()

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)
app.use('/upload', routerUpload)


console.log('-----------------------------------------')
console.log('process.env.PORT:', process.env.PORT)
console.log('process.env.TIPO:', process.env.TIPO)
console.log('process.env.CNX:', process.env.CNX)
console.log('-----------------------------------------')


// ------- Server Listen --------
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`))
