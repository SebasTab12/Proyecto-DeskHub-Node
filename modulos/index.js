import express from 'express'
import { conn } from './src/config/database.js'
import { router_usuario } from './src/router/RouterUsuarios.js'
import { router_curso } from './src/router/RouterCursos.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.json' with { type: 'json' };

const app = express()
app.use(express.json())
app.use(router_usuario)
app.use(router_curso)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = 3000
const SERVER = "http://localhost:"
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


