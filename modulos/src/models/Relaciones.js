import { Curso } from './ModelCurso.js'
import { Matricula } from './ModelMatricula.js'
import { Usuarios } from './ModelUsuario.js'

Curso.belongsToMany(Usuarios, {
    through: Matricula,
    foreignKey: "id_usuario"
})
Usuarios.belongsToMany(Curso, {
    through: Matricula,
    foreignKey: "id_curso"
})

export {
    Curso, Matricula, Usuarios
}