import express from 'express'
import { conn } from './src/config/database.js'
import { router_usuario } from './src/router/RouterUsuarios.js'
import { router_espacio } from './src/router/RouterEspacios.js'

const app = express()
app.use(express.json())
app.use(router_usuario)
app.use(router_Espacio)

const PORT = 3000
const SERVER = "http://localhost/phpmyadmin5.2.3/index.php?route=/database/structure&db=deskhub"
const URL = SERVER + PORT

app.listen(PORT, () => {
    console.log("Servidor funcionando de forma correcta. URL: " + URL)
})

conn.authenticate()
    .then(() => {
        return conn.sync()
    })
    .then(() => console.log("Conexión establecida..."))
    .catch((error) => console.log(error))


