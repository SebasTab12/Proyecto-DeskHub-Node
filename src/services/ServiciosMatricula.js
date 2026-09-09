import { crearMatricula, obtenerMatriculas, actualizarMatricula, eliminarMatricula, obtenerMatriculaFechaInicio } from "../repositories/RepositoryMatricula.js";

export function registrarMatricula(data) {
    if (!data.id_usuario || !data.id_Espacio || !data.fecha_inicio || !data.fecha_fin) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearMatricula(data)
}

export function listarMatriculas() {
    return obtenerMatriculas()
}

export function modificarMatricula(data, id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return actualizarMatricula(data, id)
}

export function borrarMatricula(id) {
    if (!id) {
        return Promise.reject(new Error("El ID es obligatorio..."))
    }
    return eliminarMatricula(id)
}

export function consultarMatriculaFechaInicio(fecha) {
    if (!fecha) {
        return Promise.reject(new Error("La fecha es obligatoria..."))
    }
    return obtenerMatriculaFechaInicio(fecha)
}
