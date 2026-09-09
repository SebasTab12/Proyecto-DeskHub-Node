import { listarEspacios, registrarEspacio, modificarEspacio, borrarEspacio, consultarEspacioNombre } from "../services/ServiciosEspacio.js"

export function crear(req, res) {
    registrarEspacio(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarEspacios()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarEspacio(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Espacio editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarEspacio(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Espacio eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}