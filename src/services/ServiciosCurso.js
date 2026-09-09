import { crearEspacio, obtenerEspacios, actualizarEspacio, eliminarEspacio, obtenerEspacioNombre } from "../repositories/RepositoryEspacio.js";

export function registrarEspacio(data) {
    if (!data.nombre || !data.descripcion || !data.duracion) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearEspacio(data)
}

export function listarEspacios() {
    return obtenerEspacios()
}

export function modificarEspacio(data, id) {
    if (!id) {
        return new Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarEspacio(data, id)
}

export function borrarEspacio(id) {
    if (!id) {
        return new Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarEspacio(id)
}

export function consultarEspacioNombre(nombre) {
    if (!data.nombre) {
        return new Promise.reject(new Error("El nombre es obligatorio..."))
    }
    return obtenerEspacioNombre(nombre)
}