import { registrarUsuario, listarUsaurios, modificarUsuario, borrarUsuario } from "../services/ServiciosUsuario.js";

export function crear(req, res) {
    registrarUsuario(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarUsaurios()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export function editar(req, res) {
    modificarUsuario(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Usuario editado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    modificarUsuario(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Usuario eliminado de forma correcta" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}