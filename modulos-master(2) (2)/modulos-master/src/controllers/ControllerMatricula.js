import { listarMatriculas, registrarMatricula, modificarMatricula, borrarMatricula, consultarMatriculaFechaInicio } from "../services/ServiciosMatricula.js"

export function crear(req, res) {
    registrarMatricula(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarMatriculas()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarMatricula(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Matricula editada de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarMatricula(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Matricula eliminada de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
