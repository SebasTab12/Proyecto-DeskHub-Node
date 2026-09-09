import { Espacio } from '../models/ModelEspacio.js'

export function crearEspacio(data) {
    return Espacio.create(data)
}

export function obtenerEspacios(data) {
    return Espacio.findAll(data)
}

export function actualizarEspacio(data, id) {
    return Espacio.update(data, {
        where: { id_Espacio: id }
    })
}

export function eliminarEspacio(id) {
    return Espacio.destroy({
        where: { id_Espacio: id }
    })
}

export function obtenerEspacioNombre(nombre) {
    return Espacio.findOne({
        where: { nombre: nombre }
    })
}
