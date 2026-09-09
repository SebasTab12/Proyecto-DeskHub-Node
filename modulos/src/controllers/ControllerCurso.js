import { listarCursos, registrarCurso, modificarCurso, borrarCurso, consultarCursoNombre } from "../services/ServiciosCurso.js"

export function crear(req, res) {
    registrarCurso(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarCursos()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarCurso(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Curso editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarCurso(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Curso eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}