import { crearCurso, obtenerCursos, actualizarCurso, eliminarCurso, obtenerCursoNombre } from "../repositories/RepositoryCurso.js";

export function registrarCurso(data) {
    if (!data.nombre || !data.descripcion || !data.duracion) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearCurso(data)
}

export function listarCursos() {
    return obtenerCursos()
}

export function modificarCurso(data, id) {
    if (!id) {
        return new Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarCurso(data, id)
}

export function borrarCurso(id) {
    if (!id) {
        return new Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarCurso(id)
}

export function consultarCursoNombre(nombre) {
    if (!data.nombre) {
        return new Promise.reject(new Error("El nombre es obligatorio..."))
    }
    return obtenerCursoNombre(nombre)
}