import { Matricula } from '../models/ModelMatricula.js'

export function crearMatricula(data) {
    return Matricula.create(data)
}

export function obtenerMatriculas(data) {
    return Matricula.findAll(data)
}

export function actualizarMatricula(data, id) {
    return Matricula.update(data, {
        where: { id_matricula: id }
    })
}

export function eliminarMatricula(id) {
    return Matricula.destroy({
        where: { id_matricula: id }
    })
}

export function obtenerMatriculaFechaInicio(fecha) {
    return Matricula.findOne({
        where: { fecha_inicio: fecha }
    })
}