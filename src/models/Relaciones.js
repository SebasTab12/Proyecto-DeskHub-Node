import { Espacio } from './ModelEspacio.js'
import { Matricula } from './ModelMatricula.js'
import { Usuarios } from './ModelUsuario.js'

Espacio.belongsToMany(Usuarios, {
    through: Matricula,
    foreignKey: "id_usuario"
})
Usuarios.belongsToMany(Espacio, {
    through: Matricula,
    foreignKey: "id_espacio"
})

export {
    Espacio, Matricula, Usuarios
}